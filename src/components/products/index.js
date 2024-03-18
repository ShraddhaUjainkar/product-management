import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const index = () => {
    const centerStyle = {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      };
      const buttonStyle = {
        margin: '10px',
        padding: '15px',
        background: '#3498db',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        display: 'inline-block',
      };
  return (
    <div style={centerStyle}>
      <Link to="/products" style={buttonStyle}> Products </Link>
      <Link to="/products/add" style={buttonStyle}> Add Product </Link>
      {/* <Link to="/products/edit/:productId" style={buttonStyle}> Edit Product </Link> */}
      <Outlet />
    </div>
  )
}

export default index