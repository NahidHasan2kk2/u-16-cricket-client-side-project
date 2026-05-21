'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { TbBrandBooking } from 'react-icons/tb';

const BookingCard = ({ details }) => {
 const { data: session } = authClient.useSession();
 const user = session?.user;
 console.log(user)
 const [departureDate, setDepartureDate] = useState(null);
 const [duration, setDuration] = useState("");

 const {
  name,
  image,
  location,
  price,

  type,

 } = details;



 const handleBooking = async () => {
  const newBookingData = {
   userName: user?.name,
   userEmail: user?.email,
   imageUrl: user?.image,
   name,
   image,
   price,
   type,
   location,
   duration,
   date: new Date(departureDate)

  }
  const res = await fetch('http://localhost:8001/my-booking', {
   method: "POST",
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(newBookingData),
  })
  const data = await res.json();
  alert('Booking Successfully')

 }

 return (
  <Card className="bg-zinc-100 border border-zinc-100 rounded-3xl">
   <div className="p-2 space-y-2">

    <h2 className="text-xl  font-bold">
     Book Facility
    </h2>

    <div className="flex justify-between">
     <p className="text-gray-700">Price</p>
     <p className="text-cyan-500 font-bold text-xl">
      ${price}/hr
     </p>
    </div>

    <div>
     <DateField onChange={setDepartureDate} className="w-full" name="date">
      <Label className='text-sm text-gray-400'>Departure Date</Label>
      <DateField.Group>
       <DateField.Input>
        {(segment) => <DateField.Segment segment={segment} />}
       </DateField.Input>
      </DateField.Group>
     </DateField>
    </div>

    <div>
     <label className="text-sm text-gray-400">
      Duration
     </label>

     <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="w-full  bg-white border py-1 rounded-2xl px-4 py-1">
      <option>1 Hour</option>
      <option>2 Hours</option>
      <option>3 Hours</option>
     </select>
    </div>

    <Button onClick={handleBooking} className="w-full bg-cyan-500 py-2 text-white font-semibold rounded-2xl">
     <TbBrandBooking /> Book Now
    </Button>


   </div>
  </Card>
 );
};

export default BookingCard;