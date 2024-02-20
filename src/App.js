import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/ProductList';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
