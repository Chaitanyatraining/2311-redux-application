import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {

        //we have hook to access the redux store state

    const redux_state = useSelector((state)=> state.productsData.cartData)
    console.log(redux_state)
  return (
    <div>Cart</div>
  )
}
