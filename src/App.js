// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import { NavbarDefault } from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Story from './components/Story';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
 

  return (

    <>
      <div className='App'>
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Story' element={<Story/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
