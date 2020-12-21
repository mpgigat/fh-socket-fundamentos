const express = require('express');
const socketIO=require('socket.io');
const http=require('http');
const path = require('path');

const app = express();
let server=http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO =MANTIENE CONEXION DIRECTA CON EL SERVIDOR, ES LA COMUNICACION DEL BACKEND
//let io=socketIO(server);

module.exports.io=socketIO(server);
require('./sockets/sockect')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});