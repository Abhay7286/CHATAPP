import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button className="logout-button" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
