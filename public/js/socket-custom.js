var socket = io();
        socket.on('connect', function () {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function () {
            console.log('conexion perdida con el servidor');
        });

        //emit son para enviar info, on es para escuchar sucesos
        socket.emit('enviarMensaje', {
            usuario: 'Mariana',
            mensaje: 'Hola Mundo'
        },function (resp) {
            console.log('esto es una respuesta del servidor, se disparo el callback');
            console.log('respuesta server',resp);
        });

        socket.on('enviarMensajeServer', function (message) {
            console.log(`El servidor envio: `, message);
        });