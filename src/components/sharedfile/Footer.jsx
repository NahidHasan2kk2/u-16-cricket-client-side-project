'use client'

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
 return (
  <footer className="bg-slate-900 text-white mt-10">
   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">


    <div>
     <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

     <div className="space-y-3 text-gray-300">
      <p className="flex items-center gap-2">
       <Mail size={18} /> nahidhasan2kk2@gmail.com
      </p>

      <p className="flex items-center gap-2">
       <Phone size={18} /> +966 591341573
      </p>

      <p className="flex items-center gap-2">
       <MapPin size={18} /> Madinah, Saudi Arabia
      </p>
     </div>
    </div>


    <div>
     <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

     <div className="space-y-2 text-gray-300">
      <Link href="/dashboard" className="hover:text-cyan-400 block">Home</Link>
      <Link href="/auth/login" className="hover:text-cyan-400 block">Login</Link>
      <Link href="/auth/register" className="hover:text-cyan-400 block">Register</Link>

     </div>
    </div>


    <div>
     <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

     <div className="flex gap-3">
      <a
       href="https://facebook.com"
       target="_blank"
       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition"
      >
       <FaFacebook size={18} />
      </a>

      <a
       href="https://instagram.com"
       target="_blank"
       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-500 transition"
      >
       <FaInstagram size={18} />
      </a>

      <a
       href="https://twitter.com"
       target="_blank"
       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition"
      >
       <BsTwitter size={18} />
      </a>

      <a
       href="https://linkedin.com"
       target="_blank"
       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-700 transition"
      >
       <LiaLinkedin size={18} />
      </a>

      <a
       href="https://youtube.com"
       target="_blank"
       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-red-600 transition"
      >
       <BsYoutube size={18} />
      </a>
     </div>
    </div>
   </div>


   <div className="border-t border-slate-700 text-center py-4 text-gray-400 text-sm">
    © {new Date().getFullYear()} YourWebsite. All rights reserved.
   </div>
  </footer>
 );
};

export default Footer;