import FacilitiesCard from "@/components/FacilitiesCard";



const AllFacilities = async () => {
 const res = await fetch("http://localhost:8001/all-facilities");

 if (!res.ok) {
  throw new Error("API failed");
 }

 const data = await res.json();



 console.log(data);
 return (
  <div>
   <div className='text-center my-5'>
    <h1 className='text-3xl font-bold'>All Facilities</h1>
   </div>
   <div className='grid lg:grid-cols-3 gap-3'>
    {
     data.map(facility => <FacilitiesCard key={facility._id} facility={facility}></FacilitiesCard>)
    }
   </div>
  </div>
 );
};

export default AllFacilities;