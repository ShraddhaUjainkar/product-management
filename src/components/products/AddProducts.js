import React, { useState } from 'react';
import './style/style.css';
import Swal from 'sweetalert2';


const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
  
    const handleImageArrayChange = (e) => {
      const files = e.target.files;
      setImageArray(Array.from(files));
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!price || !discount || !rating || !stock || !brand || !category || !title || !description || !thumbnail || !imageArray ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }        
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discount,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                thumbnail:thumbnail,
                images: Array.from(imageArray).map(image => image.name) 
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${brand}'s data has been Added.`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                showConfirmButton: true
            });
        });
    };
   
  
    return (
    <div className='add-product'>
        <div><h2>Add Product</h2></div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Product Title </label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                    id="thumbnail"
                    type="file"
                    value={thumbnail}
                    onChange={(e)=> setThumbnail(e.target.value)}
                />
            </div>
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