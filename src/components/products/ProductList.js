import React, { useState, useEffect } from 'react';
import './style/ProductList.css';
import Card from '../atoms/Card';
import Searchbar from '../atoms/Searchbar';
function ProductList() {
  const [products, setProducts] = useState([]);
   useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        
        // if (search !== '') {
        //   url += `/search?q=${search}`;
        // }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
    };

    fetchData();
  }, []);
  

  return (
    <div className="product-list">
      <Card products={products}/>
    </div>
  );
}

export default ProductList;
