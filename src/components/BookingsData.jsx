'use client'
import { Button, Card, CloseButton } from '@heroui/react';
import DeleteBooking from './DeleteBooking';

const BookingsData = ({ booking }) => {
 console.log(booking)
 const { name, userName, image, date, duration, price } = booking;

 const safeImage =
  typeof image === "string" && image.startsWith("http")
   ? image
   : "/banner5.jpg";

 return (
  <Card className="w-full lg:w-[70%] mx-auto border-2 my-5 flex flex-col md:flex-row rounded-2xl overflow-hidden">

   <div className="w-full md:w-[160px] lg:w-[180px] h-[180px] md:h-auto">
    <img
     src={safeImage}
     className="w-full h-full object-cover rounded-2xl"
    />
   </div>
   <div className="flex flex-col md:flex-row justify-between w-full p-4 gap-4">
    <div className="space-y-1">
     <h1 className="font-bold text-xl lg:text-2xl">{name}</h1>
     <p className="opacity-60 font-semibold">{userName}</p>
     <h1 className="font-bold text-lg lg:text-xl">
      Price : {price}$
     </h1>
     <div className="text-sm lg:text-base opacity-70 space-y-1">
      <p>Duration : {duration}</p>
      <p>Date : {date}</p>
     </div>
    </div>
    <div className="flex items-center  md:justify-end">
     <DeleteBooking booking={booking}></DeleteBooking>
    </div>

   </div>
  </Card>
 );
};

export default BookingsData;