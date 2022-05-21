require('dotenv').config()
const Server =  require('./server');
const server = new Server();
server.listen();