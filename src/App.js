import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/ProductList';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import AddProducts from './components/products/AddProducts';
function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path='/add-product' element={<AddProducts />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
