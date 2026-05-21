import HeroBanner from '@/components/Banner';
import React from 'react';

const HomeLayout = ({ children }) => {
 return (
  <div>

   <HeroBanner></HeroBanner>
   {children}
  </div>
 );
};

export default HomeLayout;