const express = require('express');
const app = express();





app.get('/users',(req,res)=>{
    res.send("ОТВЕТИК");
    console.log("ХУЙ");
});

app.listen(4000,()=>{
    console.log('SERVER UP listen 4000 PORT')

})