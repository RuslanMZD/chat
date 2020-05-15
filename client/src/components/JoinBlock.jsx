import React from "react";
import {socket} from '../socket';
import axios from 'axios';






const JoinBlock=()=>{

  const [roomId, setRoomId] = React.useState('');

  const [userName, setUserName]= React.useState('');


  const onEnter=()=>{
    if(!roomId || !userName){
     return alert("Неверные данные")

    }

  axios.post('/rooms',{
    roomId,
    userName
  });


  };

return(
    <div className="join-block"> 
    <input type="text" placeholder="ROOM ID" value={roomId} onChange={(e)=>setRoomId(e.target.value) }></input>
    <input type="text" placeholder="YOU NAME" value={userName} onChange={(e)=>setUserName(e.target.value) }></input>
    <button className= "btn btn-success" onClick={onEnter}>INTER</button>
  </div>

)}

export default JoinBlock;