# Node - Módulo 2

Aplicação GoBarber usando Node.js, Express, Nunjucks e Sequelize.

## Resumo

Esta aplicação foi desenvolvida para realizar os seguintes procedimentos:

- Adiciona novos usuários
- Lista todos os prestadores de serviços
- Lista todos os horários disponíveis referentes ao prestador selecionado
- Agenda um novo serviço

## Índice

- [Telas](#telas)

  - [Login](#login)

  - [Registro](#registro)

  - [Início](#início)

  - [Compromissos](#compromissos)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Outras Ferramentas](#outras-ferramentas)

## Telas

### Login

![Screenshoot SignIn](https://github.com/osvaldokalvaitir/node-modulo2/blob/master/screenshots/SignIn.png)
Esta é a primeira tela do site, para entrar o usuário terá que digitar seu usuário e senha registrados.
Se o usário não tem ainda um cadastro no site, precisa clicar em 'Criar conta grátis' que será redirecionado a página de registro.

### Registro

![Screenshoot SignUp](https://github.com/osvaldokalvaitir/node-modulo2/blob/master/screenshots/SignUp.png)
Esta tela é responsável pelo registro do usuário onde serão obrigatórios os preenchimentos dos campos como nome, e-mail e senha, escolher uma foto para o avatar e informar se ele é um prestador de serviços.

### Início

![Screenshoot Dashboard](https://github.com/osvaldokalvaitir/node-modulo2/blob/master/screenshots/Dashboard.png)
Esta é a tela principal do site, onde você vai encontrar uma lista com todos os prestadores de serviços e poderá iniciar um agendamento com o prestador dê sua preferência e tem a opção também de sair da sua conta.

### Compromissos

![Screenshoot Appointments](https://github.com/osvaldokalvaitir/node-modulo2/blob/master/screenshots/Appointments.png)
Nesta tela, você poderá agendar um horário que esteja disponível do prestador de serviço selecionado.

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Execução de Projeto.

### Bibliotecas

- [bcrypt.js](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/bcryptjs.md)

- [Connect Flash](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/connect-flash.md)

- [Connect Loki](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/connect-loki.md)

- [ESLint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [Express](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express.md)

- [Express Session](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express-session.md)

- [Flatpickr](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/flatpickr.md) - Seguir CDN

- [Moment](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/moment.md)

- [Multer](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/multer.md)

- [Nodemon](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nodemon.md)

- [Nunjucks](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nunjucks.md)

- [pg](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg.md)

- [Sequelize](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sequelize.md)

- [Session File Store](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/session-file-store.md)

### Outras Ferramentas

- [DBeaver](https://github.com/osvaldokalvaitir/projects-settings/blob/master/database/dbeaver.md)

- [Docker](https://github.com/osvaldokalvaitir/projects-settings/blob/master/docker/docker.md)

  - [Imagem do PostgreSQL: katoza-postgis](https://github.com/osvaldokalvaitir/projects-settings/blob/master/docker/images/katoza-postgis.md)
