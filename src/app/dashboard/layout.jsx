import Footer from '@/components/sharedfile/Footer';
import Navbar from '@/components/sharedfile/Navbar';
import React from 'react';

const Dashboard = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   {children}
   <Footer></Footer>
  </div>
 );
};

export default Dashboard;