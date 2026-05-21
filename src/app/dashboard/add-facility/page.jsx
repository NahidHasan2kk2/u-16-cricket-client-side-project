'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';

const AddFacility = () => {



 const { data: session } = authClient.useSession();
 const [loading, setLoading] = useState(false)
 const userEmail = session?.user?.email;

 const handleSubmit = async (e) => {
  const { data: tokenData } = await authClient.token()
  e.preventDefault();
  setLoading(true);
  const formData = await new FormData(e.target);
  const facility = await Object.fromEntries(formData.entries());
  const newFacility = {
   ...facility, userEmail
  }
  console.log(newFacility);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-facilities`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${tokenData?.token}`
   },
   body: JSON.stringify(newFacility),
  })
  const data = await res.json();
  alert("Facility Added Successfully");

  e.target.reset();
  console.log(data);
  setLoading(false)

 }

 return (
  <div className="max-w-3xl mx-auto p-6">

   <div className="bg-white shadow-lg rounded-2xl p-6">

    <h2 className="text-3xl font-bold mb-6 text-center">
     Add Facility
    </h2>

    <form
     onSubmit={handleSubmit}
     className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >


     <div>
      <label className="block mb-2 font-medium">
       Facility Name
      </label>

      <input
       type="text"
       name="name"
       required
       placeholder="Facility Name"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>

     <div>
      <label className="block mb-2 font-medium">
       Facility Type
      </label>

      <input
       type="text"
       name="type"
       required
       placeholder="Football / Cricket"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div>
      <label className="block mb-2 font-medium">
       Image URL
      </label>

      <input
       type="text"
       name="image"
       required
       placeholder="Paste imgbb/postimage URL"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div>
      <label className="block mb-2 font-medium">
       Location
      </label>

      <input
       type="text"
       name="location"
       required
       placeholder="Dhaka"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div>
      <label className="block mb-2 font-medium">
       Price Per Hour
      </label>

      <input
       type="number"
       name="price"
       required
       placeholder="150"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div>
      <label className="block mb-2 font-medium">
       Capacity
      </label>

      <input
       type="number"
       name="capacity"
       required
       placeholder="20"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>

     <div className="md:col-span-2">
      <label className="block mb-2 font-medium">
       Available Time
      </label>

      <input
       type="text"
       name="timeSlots"
       required
       placeholder="8AM - 10AM, 4PM - 6PM"
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div className="md:col-span-2">
      <label className="block mb-2 font-medium">
       Description
      </label>

      <textarea
       name="description"
       required
       rows={2}
       placeholder="Facility description..."
       className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
      />
     </div>


     <div className="md:col-span-2">
      <button
       type="submit"
       disabled={loading}
       className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition"
      >
       {loading ? "Adding..." : "Add Facility"}

      </button>
     </div>

    </form>

   </div>

  </div>
 );
};

export default AddFacility;