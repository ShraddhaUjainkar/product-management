import React, { useState, useEffect } from 'react';
import './style/ProductList.css';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     if(search === ''){
  //       setProducts(data.products);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error fetching products:', error);
  //   });
  
  // }, []);
   useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        
        if (search !== '') {
          url += `/search?q=${search}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [search]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const sliders = document.querySelectorAll('.image-slider');
      sliders.forEach(slider => {
        const firstImage = slider.children[0];
        slider.appendChild(firstImage.cloneNode(true));
        slider.removeChild(firstImage);
      });
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-list">
    <div className='search-container'>
    <input
        type="text"
        className="search-area"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
    {search !== '' && <p className='search-label'>You are searching for {search}</p>}    
    </div>

    {
      products.length === 0 ?
      (<div className="no-data-container">
        <p className="no-data-text">No products available</p>
       </div>)
      :
    (<div className="card-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <div className="image-slider">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} className="slider-image" />
          ))}
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
    </div>)
     }
  </div>
  );
}

export default ProductList;
