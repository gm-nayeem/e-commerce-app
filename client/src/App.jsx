// internal import
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Error from './pages/Error';

// external import
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const loginUser = useSelector(state => state.user.loginUser);
  const registerUser = useSelector(state => state.user.registerUser);
  
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Success />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route 
          path='/register' 
          element={registerUser ? <Navigate to="/login" replace /> : <Register />} 
        />
        <Route 
          path='/login' 
          element={loginUser ? <Navigate to="/" replace /> : <Login />} 
        />
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
