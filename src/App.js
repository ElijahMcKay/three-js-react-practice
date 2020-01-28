import React from 'react';
import logo from './logo.svg';
import './App.scss';

import SpinningCube from "./components/SpinningCube/SpinningCube"; 
import Pic from "../src/favicon.ico"; 

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img src={Pic} />
        <SpinningCube style={{"width": "50%"}} width="200" height="200" />
      </div>
    </div>
  );
}

export default App;
