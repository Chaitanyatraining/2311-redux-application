import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Products } from '../Products/Products'
import { Product } from '../Products/Product'
import { Cart } from '../Cart/Cart'

export const Routing = () => {
  return (
    <>
       <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
       </Routes>
    </>
  )
}
