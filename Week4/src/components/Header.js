import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cartContext } from '../App'

import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const reactquery=new QueryClient();
const Header1=styled.div`
width: 100%;
background-color: black;
padding: 20px;
height: 7vh;


display: flex;

`
const Link1=styled(Link)`

padding: 10px;
color: white;
font-size: 20px;
justify-content:space-between;

text-decoration: none;
&:hover
{
    color: blue;
}

`

const H5=styled.h5`
margin-left:980px;
margin-top: 6px;

color: white;
font-size: 20px;
font-weight: 400;
text-decoration: none;
`


export const Header = () => {

    var {name,setname}=useContext(cartContext)
    let {islogin,setislogin}=useContext(cartContext)
  return (

    <>
    <QueryClientProvider client={reactquery}/>
    <Header1>
      <Link1 to="/">Home</Link1>
      <Link1 to="/fetchdata">FetchData</Link1>
      {
       
        islogin?<Link1 to="/logout">Logout</Link1>:<Link1 to="/login">Login</Link1>
      }
      
      <H5>{name}</H5>
    
    

    
    </Header1>
    </>
  )
}
