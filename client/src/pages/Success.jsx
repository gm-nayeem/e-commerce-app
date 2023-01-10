import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { userRequest } from "../requestMethod";

// create orders to send server
let orders = {
  userId: "",
  products: [],
  amount: "",
  address: {},
}

const Success = () => {
  const location = useLocation()
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.loginUser);
  const [orderId, setOrderId] = useState(null);

  // insert orders value
  orders.userId = currentUser.user._id;
  orders.amount = cart.totalPrice;
  orders.address = data.billing_details.address;

  cart.products.map(p => {
    return (
      orders.products.push({ productId: p._id, quantity: p.quantity })
    )
  });
  // console.log(orders);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", orders);
        setOrderId("id" + res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId ?
        <p style={{ textAlign: "center", fontSize: '16px' }}>
          Your Order has been created successfully.<br />
          Your order number is <b>{orderId}</b>
        </p> :
        <p style={{ textAlign: "center", fontSize: '16px' }}>
          Successfull. Your order is being prepared..
        </p>
      }
      <Link to={'/'} style={{ textDecoration: "none" }}>
        <button style={{
          marginTop: "20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: '10px',
          padding: '15px',
          fontSize: '18px'
        }}>Go to Homepage</button>
      </Link>
    </div>
  )
}

export default Success