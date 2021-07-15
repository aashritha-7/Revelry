import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                    <img 
                        className="checkout__ad" 
                        src="https://i.ebayimg.com/images/g/F6QAAOSwQcJfIpcl/s-l1600.webp"
                        alt=""
                    />

                <div>
                    <h3 className="hello">Hello, {user?.email}</h3>
                    <h2 className="checkout__title"> YOUR SHOPPING CART <ShoppingCartOutlinedIcon className="Icon"/></h2> 
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
