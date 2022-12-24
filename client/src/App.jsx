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
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const user = true;
  
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
          element={user ? <Home /> : <Register />} 
        />
        <Route 
          path='/login' 
          element={user ? <Home /> : <Login />} 
        />
        <Route path='*' element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
