import React, { useContext, useState } from 'react'
import { cartContext } from '../App'
import { Header } from './Header'
import styled from 'styled-components'
import { Logout } from './Logout'


const Box=styled.div`

margin-top: 50px;
display: flex;
flex-direction: column;
margin-left: 190px;
border: 1px solid green;
background-color: cornflowerblue;
text-align: center;
height: 290px;
width: 500px;
justify-content: center;
`

const Login1=styled.div`
display: flex;
flex-direction: column;
`

const Input=styled.input`
padding: 10px;
margin-bottom: 10px;
width:80%;
margin-left: 20px;
`
const Button=styled.button`
width:85%;
height:15%;
font-size: 20px;
margin-left: 20px;
background-color: crimson;
color: white;
border:none;
`
const H3=styled.h3`
margin-left: 50px;
margin-top: 80px;
font-size: 30px;
color: blue;

`
export const Login = () => {
  let [err,seterr]=useState("")
    let [name1,updatename]=useState("")
    let {name,setname}=useContext(cartContext)
    let {islogin,setislogin}=useContext(cartContext)

    function ButtonClicked()
    {
       
        if(name1.trim().length===0)
        {
            console.log(name1.length);
            seterr("Please Enter YUserName")
        }
        else{

          
        setname(name1);
        setislogin(true)
        
       

        }
    }

    if(islogin)
    {
      return (
        <H3>Welcome!        {name}</H3>
      )
    }
    



  return (
    <>
    
    <Box>
    <h1>Login page</h1>

    <Input type="text" placeholder="Enter Username" onChange={(e)=>updatename(e.target.value)}/>
  
    <Button onClick={ButtonClicked}>LogIn</Button>
    <h5>{err}</h5>
    
   
    
    </Box>
    </>
  )
}
