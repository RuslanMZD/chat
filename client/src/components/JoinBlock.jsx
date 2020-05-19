import React from "react";
import {socket} from '../socket';
import axios from 'axios';






const JoinBlock=(props)=>{
 
  const [roomId, setRoomId] = React.useState('');

  const [userName, setUserName]= React.useState('');

  const[isLoading, setIsLoading]=React.useState(false);


  const onEnter=async ()=>{
    if(!roomId || !userName){
     return alert("Неверные данные")

    }

    const obj={
      roomId,
      userName
    }

    setIsLoading(true);
  
 await axios.post('/rooms', obj );

  props.onLogin(obj);


  };

return(
    <div className="join-block"> 
    <input type="text" placeholder="ROOM ID" value={roomId} onChange={(e)=>setRoomId(e.target.value) }></input>
    <input type="text" placeholder="YOU NAME" value={userName} onChange={(e)=>setUserName(e.target.value) }></input>
<button disabled={isLoading} className= "btn btn-success" onClick={onEnter}>{isLoading ? "ВХОД" : "Войти"}</button>
  </div>

)}

export default JoinBlock;