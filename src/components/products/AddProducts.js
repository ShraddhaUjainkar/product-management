import React, { useState } from 'react';
import './style/style.css';
import Swal from 'sweetalert2';


const AddProducts = (products, setProducts) => {
    const [imageArray, setImageArray] = useState([]);
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
  
    const handleImageArrayChange = (e) => {
      const files = e.target.files;
      setImageArray(files);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!price || !discount || !rating || !stock || !brand || !category) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }
    };
    const id = products.length + 1;
    const newProduct = {
        imageArray,
        discount,
        rating,
        stock,
        brand,
        category
    }

    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${brand}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500
    });
  
    return (
    <div className='add-product'>
        <div><h2>Add Product</h2></div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="imageArray">Product Images </label>
            <input
                id="imageArray"
                type="file"
                multiple
                onChange={handleImageArrayChange}
            />
            </div>
            <div>
            <label htmlFor="price">Product Price</label>
            <input
                id="price"
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="discount">Product Discount</label>
            <input
                id="discount"
                type="text"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="rating">Product Rating</label>
            <input
                id="rating"
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="stock">Product Stock</label>
                <input
                    id="stock"
                    type="text"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <div>
            <label htmlFor="brand">Product Brand</label>
            <input
                id="brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="category">Product Category</label>
            <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
     
    );
}

export default AddProducts