// internal import
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Success from './pages/Success';

// external import
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Success />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
