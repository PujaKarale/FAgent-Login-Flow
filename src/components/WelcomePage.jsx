import React from "react";

function WelcomePage() {
  return (
    <div style={{
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderColor: '#243547',
      boxShadow: '0 0 20px rgba(34, 31, 31, 0.1)',
      backgroundColor: '#fff',
      padding: '4rem',
      borderRadius: '10px',

    }}>
      <h1>Welcome!</h1>
      <p style={{ fontSize: '1rem' }}>You have successfully completed the KYC process.</p>
    </div>
  );
}

export default WelcomePage;

