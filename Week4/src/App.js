import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { createContext } from 'react';
import { useState } from 'react';
import {Home} from './components/Home';
import { Header } from './components/Header';
import { Routes,Route } from 'react-router-dom';
import { Login } from './components/Login';
import { createGlobalStyle } from 'styled-components';
import { Logout } from './components/Logout';
import { Fetchdata } from './components/Fetchdata';


const Globalstyle=createGlobalStyle`
body{
background-color: burlywood;
width: 100%;
overflow: hidden;

}
`
export const cartContext=createContext();

      
function App() {
  let [islogin,setislogin]=useState(false)
  let [name,setname]=useState('');
  return (

      <cartContext.Provider value={{name ,setname,islogin,setislogin}}>
        <Globalstyle/>
        <Header/>
        
       <Routes>    
        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/fetchdata" element={<Fetchdata/>}/>

       </Routes>
       
       
       
      </cartContext.Provider>

  )
 
}

export default App;
