import React from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductItem from './ProductItem';
import "./ProductList.css"

const ProductList = () => {

    const { products, loading, error } = useFetchProducts();
    
    if(loading) return <h2>Loading Products...</h2>
    if(error) return <h2>Error : {error}</h2>


  return (
    <div className='product-list-div' >
      <h2>Products</h2>
      <div className='product-list' >
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
