import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";

const App = ()=> {
  return (
    <div className={s.app_wrapper}>
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
