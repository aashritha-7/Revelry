import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
    const history=useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p class="subtp">
                        SUBTOTAL ({basket.length} ITEMS) : <strong>{value}</strong>
                        </p>
                        
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />  

            <button onClick={e => history.push('/payment')}> Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal
