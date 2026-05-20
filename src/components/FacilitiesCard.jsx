'use client';

import React from 'react';
import { Card } from '@heroui/react';
import { DollarSign, Users, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FacilitiesCard = ({ facility }) => {
 const {
  name,
  image,
  location,
  price,
  capacity,
  timeSlots,
  description,
  type,
  _id,
 } = facility;

 return (
  <Card className="w-full max-w-sm rounded-2xl  shadow-md overflow-hidden hover:shadow-2xl transition">


   <div className="relative  w-full h-48">
    <Image
     src={image}
     alt={name}
     fill
     className="object-cover rounded-2xl"
    />
   </div>


   <div className="p-4 space-y-2">

    <h2 className="text-xl font-bold">{name}</h2>

    <p className="text-sm text-gray-500">{type}</p>

    <div className="flex items-center gap-2 text-sm text-gray-600">
     <MapPin className="w-4 h-4" />
     {location}
    </div>

    <div className="flex items-center gap-2 text-cyan-600 font-semibold">
     <DollarSign className="w-4 h-4" />
     {price} / hour
    </div>

    <div className="flex items-center gap-2 text-sm">
     <Users className="w-4 h-4" />
     Capacity: {capacity}
    </div>

    <div className="flex items-center gap-2 text-sm text-gray-500">
     <Clock className="w-4 h-4" />
     {timeSlots}
    </div>

    <p className="text-sm text-gray-600 line-clamp-2">
     {description}
    </p>

    <Link
     href={`/dashboard/all-facilities/${_id}`}
     className="block text-center mt-3 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg transition"
    >
     View Details
    </Link>

   </div>
  </Card>
 );
};

export default FacilitiesCard;