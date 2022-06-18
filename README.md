# API REST de gerenciamento de usuarios

API REST de gerenciamento de usuários com permisões.

## ⚠️ Observações

- Ainda em desenvolvimento, novas funcionalidades em breve!
- Tudo que necessitar de download, o link estará ao final deste Readme.

## Requisitos para instalação

Você precisará instalar as seguintes dependências na sua IDE: 
- express.js (necessário Node.js instalado, link abaixo)
- ejs
- mongoose (necessário mongoDB instalado, link abaixo)
- jsonwebtoken (token de segurança)
- bcryptjs (criptografia de senha de usuário)
- @hapi/joi (verificação de dados preenchidos antes do salvamento)


## ⚙️ Instalação

- Baixe os arquivos da branch main
- Abra o na sua IDE (editor de código)
#
- Instalar as dependências na pasta raiz

Abra o terminal na pasta raiz, copie e cole o código abaixo 🔽
- *npm install express ejs mongoose jsonwebtoken bcryptjs @hapi/joi*
- instale o *dotenv (inclua o na instalação a cima caso for utilizar)* e faça a referência dos links do mongoDB (alterar o process.env.MONGO_CONNECTION_URL, se preferir pode usar 'mongodb://localhost/user), faça a referência da porta que sera aberta no localhost, e na pasta controllers/authController.js referncie o SECRET_TOKEN la no arquivo .env, ou se preferir troque todos os .env e insira no proprio código.
- Após a instalação incie com *node app.js*
- Abra seu navegador e digite: *http://localhost:3000*
#

⚠️ Se houver algum erro, instale as dependências separadamente:

Copie os códigos abaixo 🔽

- npm install express 
- npm install ejs 
- npm install mongoose
- npm install jsonwebtoken
- npm install bcryptjs
- npm install @hapi/joi

**Se estiver usando dotenv**
- npm install dotenv

- #### ⚠️ Se o erro persistir, entre em contato: *https://mikaelisson.github.io/portfolio/public*

##
## ⬇️ Downloads

- Node.js 
https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi

- Download do mongoDB Community Server
https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi

