
import BookingCard from '@/components/BookingCard';
import DeleteModal from '@/components/DeleteModal';
import EditModal from '@/components/EditModal';
import { Card } from '@heroui/react';
import { Clock, DollarSign, MapPin, Users } from 'lucide-react';
import Image from 'next/image';






const FacilityDetailsPage = async ({ params }) => {
 const { id } = await params;
 console.log(id)
 const res = await fetch(`http://localhost:8001/all-facilities/${id}`);
 const details = await res.json();
 const {
  name,
  image,
  location,
  price,
  capacity,
  timeSlots,
  description,
  type,

 } = details;
 return (
  <Card className="lg:max-w-9/12 mx-auto rounded-2xl  shadow-md overflow-hidden hover:shadow-2xl transition">


   <div className="relative  w-full h-72">
    <Image
     src={image}
     alt={name}
     fill
     className="object-cover rounded-2xl"
    />
   </div>

   <div className='flex  gap-3 justify-around'>
    <div className="p-4 w-full bg-zinc-100 rounded-xl space-y-2">

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
     <div className='flex'>
      <EditModal details={details}></EditModal>
      <DeleteModal details={details}></DeleteModal>

     </div>

    </div>
    <div className="w-[80%]">

     <BookingCard details={details}></BookingCard>

    </div>

   </div>

  </Card>
 );
};

export default FacilityDetailsPage;


