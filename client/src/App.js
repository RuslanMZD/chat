import React from 'react';
import io from "socket.io-client"; 




const App=()=> {
  
  const connectSocket =()=>{
    const socket = io('http://localhost:4000');
  }
  
  return (
  <div>
  <button onClick={connectSocket}>CONNECT</button>
  </div>
  );
}

export default App;
