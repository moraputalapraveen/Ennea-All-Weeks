import React, { useState } from 'react'
import { cartContext } from '../App'
import { useContext } from 'react'
import { Login } from './Login'
import { Link } from 'react-router-dom'
export const Logout = () => {
  let {islogin,setislogin,name,setname}=useContext(cartContext)

 
  setname("")
  setislogin(false)
  return (
    <>
    
      <h2>You have logout sucessfully  </h2>
      <Link to="/login">Login</Link>
    </>  )
}
