import React, { useEffect, useState } from 'react';
import './style/style.css';
import { useParams } from 'react-router-dom';
import Form from '../atoms/Form';
import Service from '../../services/index';


const EditProduct = () => {
    const service = new Service();
    const { productId } = useParams();
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
            const fetchedProduct = await service.get(`products`, productId);
            setProduct(fetchedProduct);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [productId]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
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
        service.put(`products`, productId, bodyFormData)
        .then(function (response) {
           console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    

  return (
    <div className='add-product'>
        <Form 
        product={product}
        handleInputChange={handleInputChange}
        // handleImageArrayChange={handleImageArrayChange}
        handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default EditProduct