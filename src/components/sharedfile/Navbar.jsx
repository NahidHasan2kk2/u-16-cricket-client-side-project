'use client'

import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);


  const handleLogOut = async () => {
    await authClient.signOut()
    setMenuOpen(false)
  }



  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <header className="container mx-auto flex items-center justify-between px-4 py-3">


        <div className="flex h-10 items-center">
          <Image
            className='pt-2'
            src="/images/navbarlogo.png"
            alt="Logo"
            width={80}
            height={50}
          />

          <p className="lg:text-2xl text-xl  font-bold text-cyan-500">
            Cricket
          </p>
        </div>


        <ul className="hidden lg:flex items-center gap-5">
          <li>
            <Link
              className="font-bold opacity-70 hover:text-cyan-500"
              href="/dashboard/all-facilities"
            >
              All Facilities
            </Link>
          </li>

          <li>
            <Link
              className="font-bold opacity-70 hover:text-cyan-500"
              href="/dashboard/my-booking"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link
              className="font-bold opacity-70 hover:text-cyan-500"
              href="/dashboard/add-facility"
            >
              Add Facility
            </Link>
          </li>

          <li>
            <Link
              className="font-bold opacity-70 hover:text-cyan-500"
              href="/dashboard/manage-facilities"
            >
              Manage Facilities
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block">
          {isPending ? (
            <h1>Loading...</h1>
          ) : user ? (
            <div className="relative group">
              <button className="px-4 py-2 border rounded-md">
                <div className='flex items-center gap-2'>
                  <Image
                    className='rounded-full'
                    src={user?.image}
                    alt={user?.name}
                    width={30}
                    height={30}
                  />
                  {user?.name} ⬇
                </div>
              </button>

              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-md w-52">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  href="/bookings"
                >
                  My Bookings
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  href="/add-facility"
                >
                  Add Facility
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  href="/manage-facilities"
                >
                  Manage Facilities
                </Link>

                <button
                  onClick={async () => await authClient.signOut()}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button className="bg-cyan-500"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/auth/login">Login</Link>
              </Button>

              <Button className="bg-cyan-500"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/auth/register">Register</Link>
              </Button>
            </div>
          )}
        </div>


        <div className="relative lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border rounded-md"
          >
            <div className='flex opacity-75 gap-4 items-center'>
              {
                user ? <p className='font-bold '><Image
                  className='rounded-full'
                  src={user?.image}
                  alt={user?.name}
                  width={30}
                  height={30}
                /></p> : ''
              }
              <Menu size={28} />
            </div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white border rounded-xl shadow-lg p-4 space-y-3">

              <Link
                className="block font-semibold hover:text-cyan-500"
                href="/dashboard/all-facilities"
                onClick={() => setMenuOpen(false)}
              >
                All Facilities

              </Link>

              <Link
                className="block font-semibold hover:text-cyan-500"
                href="/dashboard/my-booking"
                onClick={() => setMenuOpen(false)}
              >
                My Bookings
              </Link>

              <Link
                className="block font-semibold hover:text-cyan-500"
                href="/dashboard/add-facility"
                onClick={() => setMenuOpen(false)}
              >
                Add Facility
              </Link>

              <Link
                className="block font-semibold hover:text-cyan-500"
                href="/dashboard/manage-facilities"
                onClick={() => setMenuOpen(false)}
              >
                Manage Facilities
              </Link>

              <hr />

              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Button className="bg-cyan-500 w-full">
                    <Link href="/auth/login">Login</Link>
                  </Button>

                  <Button className="bg-cyan-500 w-full">
                    <Link href="/auth/register">Register</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </header >
    </nav >
  );
};

export default Navbar;