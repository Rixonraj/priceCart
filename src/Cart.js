import React, { useEffect, useState } from "react";
function Cart({ cartItems, removeFromCart, incNum, decNum }) {
  // let [num, setNum]= useState(0);
  let total =0;
  return (
    <>
      {
        cartItems.length === 0 ? <div>No items in cart</div> : <>
          <h3>Cart</h3>
          <ul className="list-group">
            {
              cartItems.map((item) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="fw-bold">
                    {item.name}
                  </div>
                  {item.price}
                  <div className="col-xl-1">
                    <div className="input-group">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" onClick={()=>{decNum(item)}}>-</button>
                      </div>
                      <input type="text" class="form-control" value={item.quantity} />
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={() =>{incNum(item)}}>+</button>
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
              return prev = prev + (curr.price * curr.quantity)
            }, 0)             
          }</h3>
        </>
      }
    </>
  )
}

export default Cart