import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../redux/productactions/ProductActions'
import { useDispatch } from 'react-redux'

export const Cart = () => {
        //we have hook to access the redux store state
  const dispatch = useDispatch();

    const cart_data = useSelector((state)=> state.productsData.cartData)
    console.log(cart_data)

   const totalPrice =  cart_data.reduce((prevsValue, currentValue) => {
      return prevsValue + currentValue.price
    },0)

  return (
    <div className='container'>
      <div className='mt-4'>
        <p>Total Price : {totalPrice}</p>
      </div>
       {
        cart_data && cart_data.length ? (
          cart_data.map((product)=>(
            <div className='row mt-2 border'>
                <div className='col-md-4 border'>
                  <img src={product.image} className='img-fluid' style={{height:'300px'}} alt={product.title} />
                </div>
                <div className='col-md-6'>
                  <h4 className='mt-3'> Title : {product.title}</h4>
                  <h5>Category : {product.category}</h5>
                  <p>description : {product.description}</p>
                </div>

                <div className='col-md-2 border'>
                    <h4 className='mt-5'>price : {product.price}</h4>
                    <button className='btn btn-danger' 
                    onClick={()=>{
                      dispatch(removeFromCart(product.id))
                      }}>Remove</button>
                </div>
            </div>
          ))
        ) : (<p>Please Add items to the cart</p>)
       }
    </div>
  )
}
