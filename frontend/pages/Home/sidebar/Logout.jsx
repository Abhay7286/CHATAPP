import React from 'react';
import { FiLogOut } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import UseLogout from '../../../hooks/UseLogout';

const Logout = () => {
  const { loading, logout } = UseLogout();

  return (
    <>
      {!loading ? (
        <div className='logout-box'>
          <FiLogOut className="logout-button" onClick={logout} />
        </div>
      ) : (
        <FaSpinner className='spinner'/>
      )}
    </>
  );
};

export default Logout;
