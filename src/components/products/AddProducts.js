import React, { useState } from 'react';
import './style/style.css';
import Service from '../../services/index';

const AddProducts = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        discount: '',
        rating: '',
        stock: '',
        brand: '',
        category: '',
        description: '',
        thumbnail: '',
        images: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
        
    };
    const handleImageArrayChange = (event) => {
        const selectedFiles = event.target.files;
        const filesArray = Array.from(selectedFiles);
        setProduct({
            ...product,
            images: filesArray,
        });
        

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append("title", product.title);
        bodyFormData.append("price", product.price);
        bodyFormData.append("discount", product.discount);
        bodyFormData.append("rating", product.rating);
        bodyFormData.append("stock", product.stock);
        bodyFormData.append("brand", product.brand);
        bodyFormData.append("category", product.category);
        bodyFormData.append("description", product.description);
        bodyFormData.append("thumbnail", product.thumbnail); 
        let filesArray=product.images;
        for (let index = 0; index < filesArray.length; index++) {
            const file = filesArray[index];
            bodyFormData.append("images[]", file.name);
        }        
        const service = new Service();
        service.post('products/add',bodyFormData)
        .then(function (response) {
           console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div className='add-product'>
            <div><h2>Add Product</h2></div>
                <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="title">Product Title </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-row">
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className="form-row">
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input
                            id="thumbnail"
                            type="file"
                            name="thumbnail"
                            value={product.thumbnail}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className="form-row">
                    <label htmlFor="imageArray">Product Images </label>
                    <input
                        id="imageArray"
                        type="file"
                        name="images"
                        multiple
                        onChange={handleImageArrayChange}
                    />
                    </div>
                    <div className="form-row">
                    <label htmlFor="price">Product Price</label>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-row">
                    <label htmlFor="discount">Product Discount</label>
                    <input
                        id="discount"
                        type="number"
                        name="discount"
                        value={product.discount}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-row">
                    <label htmlFor="rating">Product Rating</label>
                    <input
                        id="rating"
                        type="number"
                        name="rating"
                        value={product.rating}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-row">
                        <label htmlFor="stock">Product Stock</label>
                        <input
                            id="stock"
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className="form-row">
                    <label htmlFor="brand">Product Brand</label>
                    <input
                        id="brand"
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-row">
                    <label htmlFor="category">Product Category</label>
                    <input
                        id="category"
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleInputChange}
                    />
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
        </div>
    );
};
export default AddProducts




