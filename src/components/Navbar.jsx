import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css'

const Navbar = () => {
  return (
    <div className='navi'>
      <nav className="bg-gray-900 navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl mr-8 gr-text">UNITEUP</span>
            </div>
            <div className="flex">
            
              <Link to="/" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">HOME</Link>
              <Link to="/project" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">PROJECTS</Link>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">ABOUT US</button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">FEATURES</button>
              <Link to="/login" className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SIGN UP</Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
