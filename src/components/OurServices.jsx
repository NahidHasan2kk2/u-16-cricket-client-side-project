import React from "react";

const OurServices = () => {
 return (
  <section className="my-10 px-4 bg-gray-50 py-10">
   <h2 className="text-3xl font-bold text-center mb-6">
    Our Services
   </h2>

   <div className="grid md:grid-cols-4 gap-6 text-center">
    <div className="p-4 border rounded-lg shadow-lg">
     <h3 className="text-lg font-semibold">🏟 Ground Booking</h3>
    </div>

    <div className="p-4 border rounded-lg shadow-lg">
     <h3 className="text-lg font-semibold">🏏 Training Sessions</h3>
    </div>

    <div className="p-4 border rounded-lg shadow-lg">
     <h3 className="text-lg font-semibold">👨‍🏫 Coaching</h3>
    </div>

    <div className="p-4 border rounded-lg shadow-lg">
     <h3 className="text-lg font-semibold">📅 Flexible Scheduling</h3>
    </div>
   </div>
  </section>
 );
};

export default OurServices;