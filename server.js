const express = require('express');

const app = express();
const server = require('http').Server(app);
const io =require('socket.io')(server);


// const rooms ={

// 'rooms':[],
// 'messages':['hello'],

// };


const rooms = new Map(); // типо объект но улучшенный, псевдомассив , объект которые наследует методы массива


app.get('/rooms',(req,res)=>{
   
    res.json(rooms);

});

io.on("connection", socket=>{
    console.log("user connected", socket.id);

});


server.listen(4000,(err)=>{  // приходит ошибка
    if(err){   //если есть ошибка  то возвращаем ее в консоли
        throw Error(err)
    }
    console.log('SERVER UP listen 4000 PORT')

})