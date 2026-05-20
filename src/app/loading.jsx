import React from 'react';

const Loading = () => {
 return (
  <div className='flex justify-center items-center bg-gray-300 h-full'>
   <h1>Global Loading .... <span className="loading loading-spinner loading-xl"></span></h1>
  </div>
 );
};

export default Loading;