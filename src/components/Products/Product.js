import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../redux/productactions/ProductActions'
import { useDispatch } from 'react-redux' 

export const Product = () => {
    const [product, setProduct] = useState({})
    const [isProductAdded, setIsProductAdded] = useState(false)
    const { id } = useParams();

    const dispatch = useDispatch();

    const getTheProduct = async () => {
        const { data } = await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        getTheProduct();
    }, [])
    return (
        //array.length
        //for object it is  Object.keys
        <>
            <div className='container'>
                <h2>Product</h2>
                {
                    Object.keys(product).length ? (
                        <div className='row border'>
                            <div className='col-md-6 col-sm-12 border p-4'>
                                <img className='img-fluid' src={product.image} />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='mt-3'>
                                    <h3>{product.title}</h3>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='bg-secondary'>{product.category}</h3>
                                </div>
                                <div className="product_price">
                                    <span className='bg-info text-light p-1'>
                                        Price : ${product.price}
                                    </span>
                                </div>
                                <div className='product_desc mt-2'>
                                    <p>{product.description}</p>
                                </div>
                                <div className='product_add_to_cart mt-3'>
                                    <button className='btn btn-success py-2' 
                                    onClick={()=>{
                                        dispatch(addToCart(product))
                                        setIsProductAdded(true)
                                    }}
                                    >{isProductAdded ? "added" : "Add to Cart" }</button>
                                </div>
                            </div>
                        </div>
                    ) : (<p>loading...</p>)
                }
            </div>

        </>
    )
}
