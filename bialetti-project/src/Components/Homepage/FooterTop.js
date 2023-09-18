import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="logo-section">
                    <img src="https://www.liblogo.com/img-logo/bi8162b690-bialetti-logo-bialetti-logo-decals-by-cthulhu8u-community--sport.png" alt="Logo" className="logo" />
                    <h2><strong>THE ESSENCE OF <br /> ITALIAN COFFEE CULTURE. </strong></h2>
                </div>
                <div className="footer-links-top">
                    <img src='https://www.bialetti.com/media/wysiwyg/spedizione_4x.png' alt='delivery'/>
                    <h3>FREE DELIVERY <br/> <p>for order over $59.99</p>  </h3> 
                    
                    <img src='https://www.bialetti.com/media/wysiwyg/pagamenti_4x.png' alt='lock' />
                    <h3>PAYMENT SECURITY <br/> <p>via PayPal</p> </h3> 
                    
                    <img src='https://www.bialetti.com/media/wysiwyg/resi_4x.png' alt='return' />
                    <h3>FREE RETURNS  <br/> <p>within 14 days</p> </h3>
                    
                </div>
            </div>
        </footer>
    );
}

export default FooterTop;
