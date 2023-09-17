import React, { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [isProductSelectOpen, setIsProductSelectOpen] = useState(false);

  const toggleProductSelect = () => {
    setIsProductSelectOpen(!isProductSelectOpen);
  };

  return (
    <div className='navmain'>
      <div>
        <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" height="80px" width="180" alt="" />
      </div>

      <div className='navMid'>
        <div>COFFEE ROASTING BIALETTI</div>
        <div>MOKA EXPRESS</div>
        <div>
          <div onClick={toggleProductSelect} > 
          <select className={`productSelect ${isProductSelectOpen ? 'open' : ''}`} style={{width:"100px"}} >
          <optgroup label=''>
            <option value="">PRODUCTS</option>
          </optgroup>
          <optgroup label="Coffee" >
              <option value="Bialetti system Capsules">Bialetti system Capsules</option>
              <option value="Nespresso compatible Capsules">Nespresso compatible Capsules</option>
              <option value="Ground">Ground</option>
              <option value="Coffee Beans">Coffee Beans</option>
            </optgroup>
          
           <optgroup label="Coffee Makers">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </optgroup>
           
           <optgroup label="Espresso machine">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </optgroup>
            <optgroup label="Accessories">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </optgroup>
          </select>
          </div>
          </div>
        <div>NEWS<select className='newsSelect'></select></div>
        <div>INSPIRATION</div>
        <div>STORES</div>
      </div>
      <div className='navLast'>
        <div><i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: "#121212" }}></i></div>
        <div><i className="fa-regular fa-user fa-lg" style={{ color: "#121212" }}></i></div>
        <div><i className="fa-solid fa-bag-shopping fa-lg" style={{ color: "#121212" }}></i></div>
        <div><i className="fa-solid fa-globe fa-lg" style={{ color: "#121212" }}></i></div>
        <div><i className="fa-solid fa-grip-lines fa-lg" style={{ color: "#121212" }}></i></div>
      </div>
    </div>
  );
}

export default Navbar;
