import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../App'
import { Header } from './Header'
export const Home = () => {

    let {cart,setcart}=useContext(cartContext);

  return (
    <>
    
    <h1>This is Home Page</h1>
    
    

    
    </>
  )
}
