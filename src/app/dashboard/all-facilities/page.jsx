import FacilitiesCard from "@/components/FacilitiesCard";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";



const AllFacilities = async () => {

 // const { token } = await auth.api.getToken({
 //  headers: await headers()
 // })



 // , {
 //   headers: {
 //    authorization: `Bearer ${token}`
 //   }
 //  }

 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities`);

 const data = await res.json();



 // console.log(data);
 return (
  <div>
   <div className='text-center my-5'>
    <h1 className='text-3xl font-bold'>All Facilities</h1>
   </div>
   <div className="grid lg:grid-cols-3 gap-3 items-stretch auto-rows-fr">
    {
     data.map(facility => <FacilitiesCard key={facility._id} facility={facility}></FacilitiesCard>)
    }
   </div>
  </div>
 );
};

export default AllFacilities;