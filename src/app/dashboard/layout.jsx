const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import HeroBanner from '@/components/Banner';
import ChooseSection from '@/components/ChooseSection';
import OurServices from '@/components/OurServices';
import Footer from '@/components/sharedfile/Footer';
import Navbar from '@/components/sharedfile/Navbar';
import React from 'react';

const Dashboard = ({ children }) => {
 return (
  <div>
   <Navbar></Navbar>
   {/* <HeroBanner></HeroBanner> */}
   {children}
   <ChooseSection></ChooseSection>
   <OurServices></OurServices>
   <Footer></Footer>
  </div>
 );
};

export default Dashboard;
