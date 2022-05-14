
import { Component } from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
        <FullName/>
        <ProfilePhoto/>
        <Address/>
    </div>
  );
}

export default App;
