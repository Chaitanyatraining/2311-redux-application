import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Products } from '../Products'

export const Routing = () => {
  return (
    <>
       <Routes>
        <Route path='/products' element={<Products />} />
       </Routes>
    </>
  )
}
