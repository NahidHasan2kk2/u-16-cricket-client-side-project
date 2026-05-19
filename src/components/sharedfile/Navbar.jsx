'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { use } from 'react';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
const Navbar = () => {
 const { data: session, isPending } = authClient.useSession()
 const user = session?.user;

 return (
  <nav className="sticky container mx-auto top-0 z-40 w-full border-b border-separator bg-background">
   <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center">

     <div >
      <Image
       src="/images/logo.png"
       alt="Logo"
       width={100}
       height={60}

      />
     </div>

     <p className="text-2xl pb-2  text-cyan-500 font-bold">
      Cricket
     </p>

    </div>
    <ul className="flex items-center gap-4">
     <li className='font-bold opacity-60'><Link href="/dashboard/all-facilities">All Facilities</Link></li>
     <li className='font-bold opacity-60'><Link href="/dashboard/my-booking">My Bookings</Link></li>
     <li className='font-bold opacity-60'><Link href="/dashboard/add-facility">Add Facility</Link></li>
     <li className='font-bold opacity-60'><Link href="/dashboard/manage-facilities">Manage My Facilities</Link></li>
    </ul>
    {
     isPending ?
      <div>
       <h1>loading .......</h1>
      </div> :
      <div>
       {
        user ?

         <div className="relative group">


          <button className="px-3 py-2 border rounded-md">
           {user.name}  ⬇
          </button>


          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md w-52">
           <Link className="block px-4 py-2 hover:bg-gray-100" href="/bookings">
            My Bookings
           </Link>

           <Link className="block px-4 py-2 hover:bg-gray-100" href="/add-facility">
            Add Facility
           </Link>

           <Link className="block px-4 py-2 hover:bg-gray-100" href="/manage-facilities">
            Manage My Facilities
           </Link>

           <button
            onClick={async () => await authClient.signOut()}
            className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
           >
            Logout
           </button>
          </div>
         </div>
         :
         <div>
          <Button className="bg-cyan-500"><Link href="/auth/login">Login</Link></Button>
          <Button className="bg-cyan-500 ml-3"><Link href="/auth/register">Register</Link></Button>
         </div>


       }

      </div>
    }


   </header>
  </nav >
 );
};

export default Navbar;