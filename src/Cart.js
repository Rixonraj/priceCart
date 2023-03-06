import React, { useEffect, useState } from "react";
function Cart({ cartItems, removeFromCart }) {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  return (
    <>
      {
        cartItems.length === 0 ? <div>No items in cart</div> : <>
          <h3>Cart</h3>
          <ul className="list-group">
            {
              cartItems.map((item) => {
                return <li class="list-group-item d-flex justify-content-between align-items-center">
                  <div class="fw-bold">
                    {item.name}
                  </div>
                  {item.price}
                  <div className="col-xl-1">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                      </div>
                      <input type="text" class="form-control" value={num} onChange={handleChange} />
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                      </div>
                    </div>
                  </div>

                  <span onClick={() => { removeFromCart(item) }} class="badge bg-primary rounded-pill">X</span>
                </li>
              })
            }
          </ul>
          <h3>Total Rs.{
            cartItems.reduce((prev, curr) => {
              return prev = prev + curr.price
            }, 0)
          }</h3>
        </>
      }
    </>
  )
}

export default Cart