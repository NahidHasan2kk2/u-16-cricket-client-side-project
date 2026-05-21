
import BookingsData from '@/components/BookingsData';
import { map } from 'better-auth';
import React from 'react';

const MyBookings = async () => {
 const res = await fetch('http://localhost:8001/my-booking');
 const data = await res.json();
 console.log(data);
 return (
  <div>
   {
    data.length > 0 ?
     <div>
      {
       data.map(booking => <BookingsData key={booking._id} booking={booking}></BookingsData>)
      }
     </div>
     :
     <div className='text-center bg-gray-200 py-20 m-5 '>
      <h1 className='text-3xl font-bold opacity-55'>
       No added booking yet !
      </h1>
     </div>
   }
  </div>
 );
};

export default MyBookings;

