import React from 'react';
import { FiLogOut } from "react-icons/fi";

const Logout = ({ onLogout }) => {
  return (
    <FiLogOut className="logout-button" onClick={onLogout} />
  );
};

export default Logout;
