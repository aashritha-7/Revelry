import React from 'react';
import "./Footer.css";
import {Button} from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <Button
            onClick={()=>window.scrollTo(0, 0)}
            className="footer__button" variant="outlined">
          Back to top
            
            </Button>
            <div className="footer__info">
            <div className="footer_infobox1">
                   <h4> Get to Know Us</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Revelry</p>
                    <p>Sustainability</p>
                    <p>Investor Relations</p>
                    <p>Revelry Devices</p>
                    <p>Revelry Tours</p>
            </div>
            <div className="footer_infobox1">
                   <h4> Make Money with Us</h4>
                    <p>Sell on Revelry</p>
                    <p>Sell Your Apps on Revelry</p>
                    <p>Self-Publish with Us</p>
                    <p>Advertise Your Products</p>
                    <p>Investor Relations</p>
                    <p>Become an Affiliate</p>
                    <p>Host an Revelry Hub</p>
            </div>
            <div className="footer_infobox1">
                   <h4> Revelry Payment Products</h4>
                    <p>Revelry Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Revelry Currency Converter</p>
                    <p>Investor Relations</p>
                    <p>Revelry Devices</p>
                    <p>Revelry Tours</p>
            </div>



            </div>
            <div className="myinfo">
            <p>@revelry ❤️️ </p>
            </div>
        </div>
    )
}

export default Footer