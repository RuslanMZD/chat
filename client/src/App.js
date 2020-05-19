import React from 'react';
import socket from './socket';
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";




const App=()=> {


const [state, dispatch] = React.useReducer(reducer,{
  joined: false,
  roomId:null,
  userName:null

});


const  onLogin =(obj)=>{

  dispatch({
    type:"JOINED",
    payload: obj
  });
  socket.emit('ROOM:JOIN', obj);   //отправить сокет запрос на сервак
};

window.socket=socket;
console.log(state);

return (
  <div className="wrapper">
  { !state.joined && <JoinBlock onLogin={onLogin}/>}
  </div>
  );
}

export default App;
