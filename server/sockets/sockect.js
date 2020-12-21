const {io}=require('../server')

io.on('connection',(client)=>{
    console.log(`usuario conectado`)

    //se puede llamar igual
    client.emit('enviarMensajeServer',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta app'
    })

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })

    //escuchar cliente
    client.on('enviarMensaje',(message,callback)=>{
        console.log(message);

        // if(message.usuario){
        //     callback({
        //         resp:'salio bien'
        //     })
        // }else{
        //     callback({
        //         resp:'salio mal!!!!!'
        //     })
        // }

    });

    client.on('enviarMensajeBroad',(data)=>{
        console.log(data);
        client.broadcast.emit('enviarMensajeServer',data)
    })
});