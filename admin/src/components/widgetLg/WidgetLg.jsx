import { useState, useEffect } from "react";
import "./widgetLg.css";
import {userRequest} from '../../requestMethod';

const WidgetLg = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("/orders");
                console.log(res.data);
                setOrders(res.data);
            } catch (err) {
                console.log(err.message)
            }
        }
        getOrders();
    }, []);

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>                
            </table>
        </div>
    );
}

export default WidgetLg;