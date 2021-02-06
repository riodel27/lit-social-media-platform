import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SocketService } from '_services/socket.service';
import { SocketContext } from 'context/socket';

const socket = new SocketService();

ReactDOM.render(
   <React.StrictMode>
      <SocketContext.Provider value={socket}>
         <App />
      </SocketContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
