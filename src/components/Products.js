import React, { useEffect, useState } from 'react'

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsData();
    }, [])

    const getProductsData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        console.log(products)
    }

    return (
        <>
            <h2>Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        products.length > 0 ? (
                            products.map((product) => (
                                <div className='col-md-3'>
                                    <div className='card'>
                                        <img src={product.image} alt={product.title} />
                                        <h3>{product.title}</h3>
                                    </div>

                                </div>
                            ))
                        ) : <p>Loading...</p>
                    }
                </div>
            </div>
        </>
    )
}
