const express = require('express');

const app = express();
const server = require('http').Server(app);
const io =require('socket.io')(server);


// const rooms ={

// 'rooms':[],
// 'messages':['hello'],

// };

app.use(express.json());  // парсить тело запросов, иначе req ничего не выдаст

const rooms = new Map(); // типо объект но улучшенный, псевдомассив , объект которые наследует методы массива


app.get('/rooms',(req,res)=>{ 
   
    res.json(rooms);

});

app.post('/rooms',(req,res)=>{
const {roomId, userName}=req.body;
if(!rooms.has(roomId)){
   rooms.set(
       roomId, new Map([
       ['users', new Map()],
       ['messages',[]],
   ])
 
   )};
   res.send();
   console.log(roomId)
  // console.log([...rooms])
//res.json([...rooms.keys()]); 

});

io.on("connection", (socket)=>{
   socket.on("ROOM:JOIN",(data)=>{   //КОгда каждый клиент будет отправлять сокет запрос с экшеном ROOM:JOIN то будет выполнять функция, этот метод будет срабатывать для всех пользователей. data данные которые передает польз серверу
       console.log(data)
   })
   
    console.log("user connected", socket.id); // как только юзер подкл к сокетам мы получим сообщение в консоль

});


server.listen(4000,(err)=>{  // приходит ошибка
    if(err){   //если есть ошибка  то возвращаем ее в консоли
        throw Error(err)
    }
    console.log('SERVER UP listen 4000 PORT')

})