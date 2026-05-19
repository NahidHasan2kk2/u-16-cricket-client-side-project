import Navbar from '@/components/sharedfile/Navbar';
import React from 'react';

const Dashboard = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   {children}
  </div>
 );
};

export default Dashboard;