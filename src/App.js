import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card';
import Cart from './Cart';
import React, { useEffect, useState } from "react";

function App() {
  let products = [
    {
      id:1,
      name:'iwatch',
      price:25000,
      quantity: 0
    },
    {
      id:2,
      name:'ipad',
      price:55000,
      quantity: 0
    },
    {
      id:3,
      name:'ipod',
      price:15000,
      quantity: 0
    },
    {
      id:4,
      name:'Mac Book pro',
      price:95000,
      quantity: 0
    },
    {
      id:5,
      name:'i phone',
      price:75000,
      quantity: 0
    },
  ]

  const [cartItems,setCartItems] = useState([])
  

  let addCart = (product)=>{
    setCartItems([...cartItems,product])
  }

  let removeFromCart = (product)=>{
     let indexVal = cartItems.findIndex(obj => product.id === obj.id);
     cartItems.splice(indexVal,1);
     setCartItems([...cartItems]);
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
          {
          products.map((product)=>{
            return <Card product ={product} addCart={addCart} cartItems={cartItems}/>
          })}
          </div>
        </div>
        <div className='col-lg-4'>
        <Cart cartItems={cartItems} removeFromCart = {removeFromCart}/>
        </div>
      </div>

    </div>
  );
}

export default App;
