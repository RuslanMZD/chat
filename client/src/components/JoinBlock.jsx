import React from "react";
import {socket} from '../socket';





const JoinBlock=()=>{
return(
    <div className="join-block"> 
    <input type="text" placeholder="ROOM ID"></input>
    <input type="text" placeholder="YOU NAME"></input>
    <button className= "btn btn-success">INTER</button>
  </div>

)}

export default JoinBlock;