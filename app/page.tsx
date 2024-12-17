import Image from "next/image";
import React from "react";

import dashboardImage from "../public/Dashboard.png"

export default function page() {
  return (
    <div>
    <nav className="flex justify-between">
      <div>Loxcy</div>
      <div className="flex gap-10">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className="bg-orange-600 px-12 py-1 rounded-xl border border-green-900">
        Login
      </button>
    </nav>

    <p className="text-6xl mt-32 w-7/12 mx-auto text-center">Make Your Business Flourish with <span className="text-orange-500">Digital Marketing</span></p>
    <p className="w-7/12 mx-auto text-center mt-8">Save time on creating a website from scratch. Use a rich collection of ready-made websites to get your project off to a
    fast start opposed to using Content here, content here, making it look like readable English.</p>
    <div className=" flex w-4/12 mx-auto mt-8 gap-2">
      <button className="border border-orange-500 px-12 py-2">Try 30-days trial</button>
      <button className="border border-orange-500 px-12 py-2">Schedule a call</button>
    </div>

    <div className="w-7/12 mx-auto mt-16">
    <Image src={dashboardImage} alt="image"/>
    </div>
    </div>
  
  );
}
