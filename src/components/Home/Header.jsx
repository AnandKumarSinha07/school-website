
import React from 'react';
import { Link } from "react-router-dom";


const Header = () => (
  <header className="bg-blue-500 text-white p-4 flex justify-between items-center">

    <h1 className="text-2xl font-bold">Springdale Public School</h1>
    <nav>

      <ul className="flex space-x-4  font-medium p-3 text-lg">

        <li className='hover:text-gray-900 transition duration-300 ease-in-out transform  '><Link to={'/'}>Home</Link></li>
        <li className='hover:text-gray-800 transition duration-300 ease-in-out transform'><Link to="/about">About</Link></li>
        <li className='hover:text-gray-900 transition duration-300 ease-in-out transform'><Link to='/academics'>Academics</Link></li>
        <li className='hover:text-gray-900 transition duration-300 ease-in-out transform'><Link to="/admissions">Admissions</Link></li>
        <li className='hover:text-gray-900 transition duration-300 ease-in-out transform'><Link to="/faculty">Faculty</Link></li>
        <li className='hover:text-gray-900 transition duration-300 ease-in-out transform'><Link to="/students">Students</Link></li>
        <li className='hover:text-gray-600 transition duration-300 ease-in-out transform'><Link to="/gallery">Gallery</Link></li>
        <li className='hover:text-gray-600 transition duration-300 ease-in-out transform'><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
