import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import Rooter from './Components/Rooter/Rooter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Rooter/>
  </React.StrictMode>
);
