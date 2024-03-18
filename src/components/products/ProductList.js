import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style/ProductList.css';
//import Card from '../atoms/Card';
import Service from '../../services/index';
import SearchBar from '../atoms/Searchbar';
const Card = lazy(() => import('../atoms/Card'));
const service = new Service();

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let searchTimeout;

  useEffect(() => {
    service.get('products')
      .then(data => {
        console.log(data); 
        setProducts(data.products); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = async (searchText) => {
    try {
      if (searchText.trim() !== '') { 
        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }
        searchTimeout = setTimeout(async () => {
          const searchData = await service.search(searchText);
          setFilteredProducts(searchData.products);
        }, 2000); 
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="product-list">
      <SearchBar onSearch={handleSearch}  />
      <Suspense fallback={<div>Loading...</div>}>
      <Card products={filteredProducts.length > 0 ? filteredProducts : products} />
      </Suspense>
      
    </div>
  );
}

export default ProductList;
