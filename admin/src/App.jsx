import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'


const App = () => {
  const admin = useSelector((state) => state.admin.currentUser.user.isAdmin);
  // console.log(admin)

  const currentUser = useSelector(state => state.admin.currentUser);

  return (

    <Router>

      <Routes>
        <Route
          path='/login'
          element={(currentUser && admin) ? <Navigate to="/" replace /> : <Login />}
        />
      </Routes>

      {
        admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<UserList />} />
                <Route path='/user/:userId' element={<User />} />
                <Route path='/newuser' element={<NewUser />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/newproduct' element={<NewProduct />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path='/' element={<Navigate to="/login" replace />} />
          </Routes>
        )
      }

    </Router>
  )
}

export default App