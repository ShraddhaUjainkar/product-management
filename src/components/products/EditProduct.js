import React, { useEffect, useState } from 'react';
import './style/style.css';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const EditProduct = () => {
    const { productId } = useParams();
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
    const [product, setProduct] = useState({
        id: '',
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        brand: '',
        category: '',
        rating: 0,
        stock: 0,
        thumbnail: '' ,
        images: [],
      }
    );

    useEffect(() => {
        const fetchData = async () => {
          try {       
            let url = `https://dummyjson.com/products/${productId}`;        
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setProduct(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'PUT',
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
                text: `${title}'s data has been Updated.`,
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
    }
    const handleImageArrayChange = (e) => {
        const files = e.target.files;
        setImageArray(Array.from(files));
    };

  return (
    <div className='add-product'>
         <form onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor="title">Product Title </label>
            <input
                id="title"
                type="text"
                value={ title || product.title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="form-row">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description || product.description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-row">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                    id="thumbnail"
                    type="file"
                    value={thumbnail}
                    onChange={(e)=> setThumbnail(e.target.value)}
                />
                {/* <img src={product.thumbnail} alt="Product Thumbnail" /> */}

            </div>
            <div className="form-row">
            <label htmlFor="imageArray">Product Images </label>
            <input
                id="imageArray"
                type="file"
                multiple
                onChange={handleImageArrayChange}
            />
             {/* {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product Image ${index + 1}`} />
                    ))} */}
            </div>
            <div className="form-row">
            <label htmlFor="price">Product Price</label>
            <input
                id="price"
                type="number"
                name="price"
                value={price || product.price}
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
            <div className="form-row">
            <label htmlFor="discount">Product Discount</label>
            <input
                id="discount"
                type="number"
                value={discount || product.discountPercentage}
                onChange={(e) => setDiscount(e.target.value)}
            />
            </div>
            <div className="form-row">
            <label htmlFor="rating">Product Rating</label>
            <input
                id="rating"
                type="number"
                value={product.rating}
                onChange={(e) => setRating(e.target.value)}
            />
            </div>
            <div className="form-row">
                <label htmlFor="stock">Product Stock</label>
                <input
                    id="stock"
                    type="number"
                    value={stock || product.stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <div className="form-row">
            <label htmlFor="brand">Product Brand</label>
            <input
                id="brand"
                type="text"
                value={brand || product.brand}
                onChange={(e) => setBrand(e.target.value)}
            />
            </div>
            <div className="form-row">
            <label htmlFor="category">Product Category</label>
            <input
                id="category"
                type="text"
                value={category || product.category}
                onChange={(e) => setCategory(e.target.value)}
            />
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default EditProduct