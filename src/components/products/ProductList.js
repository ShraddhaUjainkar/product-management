import React, { useState, useEffect } from 'react';
import './style/ProductList.css';
import Card from '../atoms/Card';
import Searchbar from '../atoms/Searchbar';
import Service from '../../services/index';
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const service = new Service();
    service.get('products')
      .then(data => {
        console.log(data); 
        setProducts(data.products); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <Card products={products}/>
    </div>
  );
}

export default ProductList;
