import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../CSS/navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navi">
      <nav className="bg-gray-900 navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl mr-8 gr-text">UNITEUP</span>
            </div>
            <div className="flex">
              <Link to="/" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">HOME</Link>
              <Link to="/project" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">PROJECTS</Link>
              <Link to="/about" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">ABOUT US</Link>
              <Link to="/features" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">FEATURES</Link>

              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-gray-100 hover:bg-gray-800 hover:text-white px-6 py-2 rounded-md text-sm font-medium">PROFILE</Link>
                  <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>LOG OUT</button>
                </>
              ) : (
                <Link to="/login" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOGIN</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
