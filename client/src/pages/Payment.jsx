// external import
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const STRIPE_PUBLIC_KEY = "pk_test_51MH7y7DI8Wx9xPI54KyMHdXEQviHF04P41ye1wdA3kLxeGWk4sM7iFjzVKlULvyC5po81gkvBWVFxmVBfaEBBL740008dj7c13"

const Payment = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post("http://localhost:4000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                })
                console.log(res.data)
                navigate("/success");
            } catch(err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken])

  return (
    <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}  
    >
        {
            stripeToken ? (<span>Processing. Please wait...</span>)
            : (
                <StripeCheckout
                    name='Mern Shop'
                    image='https://avatars.githubusercontent.com/u/1486366?v=4'
                    buildingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}
                    token={onToken}
                    stripeKey={STRIPE_PUBLIC_KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>               
            )
        }
    </div>
  )
}

export default Payment