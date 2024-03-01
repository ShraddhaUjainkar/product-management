import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './products/style/style.css';



const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
    navigate(`/edit/${productId}`);

  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.title);
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: `${data.title} has been deleted.`,
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
    <div className="Home">
    <div className='add-product-container'>    
      <Link to="/add-product" className="add-product-button">Add Product</Link>
    </div>

    <Table celled  style={{ margin: '50px', padding: '10px' }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product) => (
          <Table.Row key={product.id}>
            <Table.Cell>{product.id}</Table.Cell>
            <Table.Cell>{product.title}</Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
            <Table.Cell> 
              <Button color="blue" onClick={() => handleEdit(product.id)}>
                Edit
              </Button>
              <Button color="red" onClick={() => handleDelete(product.id)}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
  );
};

export default Home;
