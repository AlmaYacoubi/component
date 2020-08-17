import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "./component/profile/PofilePhoto"
import FullName from "./component/profile/FullName"
import Adress from  "./component/profile/Adress"

function App() {
  return (
    <div>
    <ProfilePhoto />
    <br/>
    <FullName />
    
    <Adress />
    </div>);
}

export default App;
