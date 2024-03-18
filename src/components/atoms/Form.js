import React from 'react'
import InputField from './InputField'

const Form = ({product, handleInputChange, handleImageArrayChange, handleThumbnailChange, handleSubmit, errors }) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <InputField
                label="Product Title"
                id="title"
                name="title"
                value={product.title}
                onChange={handleInputChange}
                hasError={errors.title}
                />
            <InputField
                label="Description"
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
            />
            <InputField
            label="Thumbnail"
            id="thumbnail"
            type="file"
            name="thumbnail"
            onChange={handleThumbnailChange}
            />
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
            <InputField
            label="Product Price"
            id="price"
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            />
            <InputField
            label="Product Discount"
            id="discount"
            type="number"
            name="discount"
            value={product.discountPercentage}
            onChange={handleInputChange}
            />
             <InputField
            label="Product Rating"
            id="rating"
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            />
            <InputField
            label="Product Stock"
            id="stock"
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleInputChange}
            />  
            <InputField
            label="Product Brand"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
            />  
            <InputField
            label="Product Category"
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            />  
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form