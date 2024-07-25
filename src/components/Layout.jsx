// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Home/Header'; // Adjust the import path if necessary
import Footer from './Footer/Footer';
const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer/>
  </div>
);

export default Layout;
