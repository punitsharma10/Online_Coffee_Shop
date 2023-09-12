import React, { useState } from 'react';
import RazorpayPayment from './RazorpayPayment';

const AddressPage = () => {

  const props=1045;
  const [address, setAddress] = useState(null);

  const handleAddressSave = (event) => {
    event.preventDefault();

    const street = event.target.elements.street.value;
    const city = event.target.elements.city.value;
    const state = event.target.elements.state.value;
    const postalCode = event.target.elements.postalCode.value;

    setAddress({ street, city, state, postalCode });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f2f2f2' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Address Page</h1>

      {!address && (
        <form
          id="addressForm"
          onSubmit={handleAddressSave}
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <div>
            <label htmlFor="street" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
              Street:
            </label>
            <input type="text" id="street" name="street" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }} />
          </div>
          <div>
            <label htmlFor="city" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
              City:
            </label>
            <input type="text" id="city" name="city" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }} />
          </div>
          <div>
            <label htmlFor="state" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
              State:
            </label>
            <input type="text" id="state" name="state" required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }} />
          </div>
          <div>
            <label htmlFor="postalCode" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
          >
            Save Address
          </button>
        </form>
      )}

      {address && (
        <div
          id="addressDisplay"
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: '20px auto',
          }}
        >
          <h2>Address Display:</h2>
          <p>
            Street: <span>{address.street}</span>
          </p>
          <p>
            City: <span>{address.city}</span>
          </p>
          <p>
            State: <span>{address.state}</span>
          </p>
          <p>
            Postal Code: <span>{address.postalCode}</span>
          </p>
        </div>
      )}
            <RazorpayPayment props={props} />  


    </div>
  );
};

export default AddressPage;
