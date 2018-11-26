const express = require('express')
const session = require('express-session')
// A biblioteca 'session-file-store' no Windows contém erros que não foram corrigidos, então, foi substituída pela 'connect-loki'
// const FileStore = require('session-file-store')(session)
const LokiStore = require('connect-loki')(session)
const nunjucks = require('nunjucks')
const path = require('path')
const flash = require('connect-flash')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret',
        resave: true,
        // A biblioteca 'session-file-store' no Windows contém erros que não foram corrigidos, então, foi substituída pela 'connect-loki'
        // store: new FileStore({
        //   path: path.resolve(__dirname, '..', 'tmp', 'sessions')
        // }),
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions', 'session-store.db')
        }),
        saveUninitialized: true
      })
    )
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
