import React from 'react'
import Slider from '../atoms/Slider';

const Card = ({products}) => {
  return (
    <div className="product-list">
    {
      // products.length === 0 ?
      // (<div className="no-data-container">
      //   <p className="no-data-text">No products available</p>
      //  </div>)
      // :
    //(
    <div className="card-container">
      {products && products.map(product => (
        <div key={product.id} className="card">
          <div className="image-slider">
          <Slider images={product.images} />
          </div>
          <div className="card-body">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
    //)
     }
  </div>
  )
}

export default Card