import React from "react";

const ChooseSection = () => {
 return (
  <section className="my-10 px-4">
   <h2 className="text-3xl font-bold text-center mb-6">
    Why Choose Us
   </h2>

   <div className="grid md:grid-cols-3 gap-6 text-center">
    <div className="p-5 border rounded-lg shadow-lg">
     <h3 className="text-xl font-semibold">🏏 Best Facilities</h3>
     <p className="text-gray-600 mt-2">
      We provide high-quality cricket grounds and training environments.
     </p>
    </div>

    <div className="p-5 border rounded-lg shadow-lg">
     <h3 className="text-xl font-semibold">💰 Affordable Price</h3>
     <p className="text-gray-600 mt-2">
      Book premium facilities at very reasonable prices.
     </p>
    </div>

    <div className="p-5 border rounded-lg shadow-lg">
     <h3 className="text-xl font-semibold">⚡ Easy Booking</h3>
     <p className="text-gray-600 mt-2">
      Fast and simple online booking system for everyone.
     </p>
    </div>
   </div>
  </section>
 );
};

export default ChooseSection;