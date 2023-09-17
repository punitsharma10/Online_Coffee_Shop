import React from 'react';
import "./Footer.css"
function Footer() {
  return (
    <div>
          <div className='footerfirst'>
              <div>
              <i class="fa-solid fa-truck fa-2xl" style={{color: "#141414"}}></i>
              <h4>Free delivery</h4>
                <p>for orders over €59.99</p>
              </div>
              <div>
              <i class="fa-solid fa-unlock-keyhole fa-2xl" style={{color: "#141414"}}></i>
              <h4>Secure online payment</h4>
                <p>via PayPal</p>
              </div>
              <div>
              <i class="fa-solid fa-rotate-left fa-2xl" style={{color: "#141414"}}></i>
                <h4>Free returns</h4>
                <p>within 14 days</p>
              </div>
          </div>
                       <hr />

    <div>


          <div className='footerSecond'>
           <div>
                <div className='footerLogo'>
                  <img src="https://www.bialetti.com/media/wysiwyg/logo-footer_4x.png" alt="" />
                  <h2>The essence of Italian coffee culture.</h2>
                </div>
           
      
              <div className='footerRegd'>
                    <h5>Registered Office</h5>
                    <p>Via Fogliano, 1 25030 Coccaglio BS Italia</p>
              </div>

              <div className='footerThird'>

                    <button className='footerbtnService' > <i class="fa-solid fa-store"  > </i>    Service Center</button>
                    <button className='footerbtnContact'><i class="fa-solid fa-pencil"  > </i>    Contact Us</button>
              </div>
           </div>




            <div className='footerSupport'>
                  <h2>Support</h2>
                  <p>Faq</p>
                  <p>Dispute resolution</p>
                  <p>Payment methods</p>
                  <p>Delivery times</p>
            </div>
            <div className='footerLegal'>
                  <h2>Legal</h2>
                  <p>Cookies</p>
                  <p>Privacy Policy</p>
                  <p>Terms and conditions</p>
                  <p>Selling conditions</p>
                  <p>Regulations</p>
                  <p>B2B</p>
                  <p>Coffee card</p>
                  <p>Quality</p>
            </div>
           
            </div>

      
    </div>
    <hr />
    </div>
  );
}

export default Footer;
