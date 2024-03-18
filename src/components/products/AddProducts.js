import React, { useState } from 'react';
import './style/style.css';
import Service from '../../services/index';
import Form from '../atoms/Form';

const AddProducts = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        brand: '',
        category: '',
        description: '',
        thumbnail: '',
        images: [],
    });
    const [errors, setErrors] = useState({
        title: false,
        price: false,
        discountPercentage: false,
        rating: false,
        stock: false,
        brand: false,
        category: false,
        description: false,
        thumbnail: false,
        images: false,
      })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
        
    };
    const handleThumbnailChange = (e) => {
        const thumbnailFile =  e.target.files[0];
        setProduct({
            ...product,
            thumbnail: thumbnailFile,
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
        bodyFormData.append("discount", product.discountPercentage);
        bodyFormData.append("rating", product.rating);
        bodyFormData.append("stock", product.stock);
        bodyFormData.append("brand", product.brand);
        bodyFormData.append("category", product.category);
        bodyFormData.append("description", product.description);

        let thumbnail_name=product.thumbnail;
        bodyFormData.append("thumbnail", thumbnail_name.name);

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
                <Form
                product={product}
                handleInputChange={handleInputChange}
                handleThumbnailChange={handleThumbnailChange}
                handleImageArrayChange={handleImageArrayChange}
                handleSubmit={handleSubmit}
                />
        </div>
    );
};
export default AddProducts




