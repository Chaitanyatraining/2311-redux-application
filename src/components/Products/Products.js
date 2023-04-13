import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/productactions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';

export const Products = () => {
    const products = useSelector((state) => state.productsData.products)
    const dispatch = useDispatch();
   
   
    useEffect(() => {
      dispatch(fetchProducts())
    }, [])

    // synchronous action creators
    // immediately return the action object with type and payload
    //asynchronous action creators
    // Takes some amount of time to return the action object with type and payload

    return (
        <>
            <h2>Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        products.length > 0 ? (
                            products.map((product) => (
                                <div className='col-md-3'>
                                    <Link to={`/product/${product.id}`}>
                                    <div className='card'>
                                        <img src={product.image} alt={product.title} />
                                        <h3>{product.title}</h3>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        ) : <p>Loading...</p>
                    }
                </div>
            </div>
        </>
    )
}
