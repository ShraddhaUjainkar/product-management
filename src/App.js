import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/index';
import ProductList from './components/products/ProductList';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import AddProducts from './components/products/AddProducts';
import Login from './components/auth/Login';
import EditProduct from './components/products/EditProduct';
function App() {
console.log('ok')
  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />}/>
          <Route path='/products/add' element={<AddProducts />} />
        </Route>
        <Route path='/login' element={<Login />} /> 
        <Route path='/edit/:productId' element={<EditProduct/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
