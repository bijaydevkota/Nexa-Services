"use client";
import Image from "next/image";
import React from "react";

import dashboardImage from "../public/Dashboard.png";
import amazonImage from "../public/amazon.svg";
import googleImage from "../public/google.svg";
import lenovoImage from "../public/lenovo.svg";
import paypalImage from "../public/paypal.svg";
import shopifyImage from "../public/shopify.svg";
import spotifyImage from "../public/spotify.svg";
import { Check, CircleCheck, Hourglass, Users, Video } from "lucide-react";
export default function page() {
  return (
    <div className="bg-orange-50">
      <nav className="flex justify-between p-5 sticky top-0 z-50 bg-[#0b363d] text-white">
        <div className="text-orange-500 cursor-pointer text-2xl hover:text-white">Loxcy</div>
        <div className="flex gap-10 cursor-pointer">
          <p className="hover:text-orange-500">Home</p>
          <p className="hover:text-orange-500">About</p>
          <p className="hover:text-orange-500">Contact</p>
          <p className="hover:text-orange-500">Services</p>
        </div>
        <button className="bg-orange-500 text-white px-10 py-2 rounded-md border border-orange-500 hover:bg-transparent">
          Login
        </button>
      </nav>

      <p className="text-6xl mt-32 md:w-7/12  mx-auto text-center">
        Make Your Business Flourish with{" "}
        <span className="text-orange-500">Digital Marketing</span>
      </p>
      <p className="md:w-7/12 mx-auto text-center mt-8">
        Save time on creating a website from scratch. Use a rich collection of
        ready-made websites to get your project off to a fast start opposed to
        using Content here, content here, making it look like readable English.
      </p>
      <div className="flex md:w-10/12 items-center justify-center  mx-auto mt-8 gap-2">
        <button className="bg-[#0b363d] text-white border border-[#0b363d] px-12 py-2 hover:bg-transparent hover:text-[#0b363d]  ">
          Try 30-days trial
        </button>
        <button className="border border-[#0b363d] px-12 py-2 hover:bg-orange-500 hover:text-black">
          Schedule a call
        </button>
      </div>

      <div className="w-7/12 mx-auto mt-16">
        <Image src={dashboardImage} alt="image" />
      </div>
      <div className="flex justify-between  w-7/12 mx-auto mt-16">
        <Image className="h-20 w-20 cursor-pointer" src={amazonImage} alt="image" />
        <Image className="h-20 w-20 cursor-pointer" src={googleImage} alt="image" />

        <Image className="h-20 w-20 cursor-pointer" src={lenovoImage} alt="image" />
        <Image className="h-20 w-20 cursor-pointer" src={paypalImage} alt="image" />

        <Image className="h-20 w-20 cursor-pointer" src={shopifyImage} alt="image" />
        <Image className="h-20 w-20 cursor-pointer" src={spotifyImage} alt="image" />
      </div>

      <div className="bg-[#0b363d] mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12  items-center justify-between mx-auto py-16 text-white">
          <div className=" flex flex-col items-center justify-center">
            <div className="bg-slate-500 flex items-center justify-center py-4 rounded-lg h-28 w-28 ">
              <Users size={44} />
            </div>
            <div className="mt-12">
              <p className="text-4xl text-center">100,000+</p>
              <p className="text-slate-500 text-center text-2xl mt-2 ">
                No. of People Join
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <div className="bg-slate-500 flex items-center justify-center py-4 rounded-lg h-28 w-28">
              <Check size={44} />
            </div>
            <div className="mt-12">
              <p className="text-4xl text-center">120+</p>
              <p className="text-slate-500 text-center text-2xl mt-2 ">
                Countries Reached
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <div className="bg-slate-500 flex items-center justify-center py-4 rounded-lg h-28 w-28">
              <Hourglass size={44} />
            </div>
            <div className="mt-12">
              <p className="text-4xl text-center">425,000+</p>
              <p className="text-slate-500 text-center text-2xl mt-2 ">
                No. of Session Given
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <div className="bg-slate-500 flex items-center justify-center py-4 rounded-lg h-28 w-28">
              <Video size={44} />
            </div>
            <div className="mt-12">
              <p className="text-4xl text-center">500K</p>
              <p className="text-slate-500 text-center text-2xl mt-2 ">
                Hours of Work
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-16">
          <p className=" flex justify-center text-orange-500">Our Pricing</p>
          <p className="text-6xl mt-4 md:w-7/12 text-center mx-auto justify-center">
            Choose The Plan That&apos;s Right For{" "}
            <span className="text-orange-500"> Your Business </span>{" "}
          </p>
        </div>

        <div className="gap-4 justify-center w-9/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">
          <div className="mt-16 pt-1 bg-white  rounded">
            <div className="bg-orange-50 m-4 p-4  rounded">
              <p className="text-2xl">Free</p>
              <p className="mt-6 text-gray-600">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6">
                $ 0 / <span className="text-lg text-gray-600"> month</span>
              </p>
              <p className="mt-4 text-lg">Includes :</p>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className="text-gray-600">Limited Encrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">250 Decrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1,00 Function Runs</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1 Environment</p>
              </div>
            </div>

            <div className="flex justify-center bg-gray-200 mt-12">
              <button className="rounded border border-[#0b363d] text-[#0b363d] px-12 py-2 m-4  hover:bg-[#0b363d] hover:text-white">
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-16 pt-1 bg-white  rounded shadow-2xl">
            <div className="bg-[#0b363d] text-white m-4 p-4  rounded">
              <p className="text-2xl">Pro</p>
              <p className="mt-6 text-white">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6">
                $ 90 / <span className="text-lg text-gray-600"> month</span>
              </p>
              <p className="mt-4 text-lg">Includes :</p>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className="text-gray-600">Unlimited Encrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">2500 Decrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1,00 Function Runs</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1 Environment</p>
              </div>
            </div>

            <div className="flex justify-center bg-gray-200 mt-12">
              <button className="rounded bg-[#0b363d] text-white border border-[#0b363d]  px-12 py-2 m-4  hover:bg-transparent hover:text-[#0b363d]">
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-16 pt-1 bg-white  rounded">
            <div className="bg-orange-50 m-4 p-4  rounded">
              <p className="text-2xl">Enterprise</p>
              <p className="mt-6 text-gray-600">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6">
                $ 190 / <span className="text-lg text-gray-600"> month</span>
              </p>
              <p className="mt-4 text-lg">Includes :</p>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className="text-gray-600">Unlimited Encrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">2500 Decrypts</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1,00 Function Runs</p>
              </div>
              <div className="flex mt-6 gap-4">
                <CircleCheck className="text-green-400" />
                <p className=" text-gray-600">1 Environment</p>
              </div>
            </div>

            <div className="flex justify-center bg-gray-200 mt-12">
              <button className="rounded border border-[#0b363d] text-[#0b363d] px-12 py-2 m-4  hover:bg-[#0b363d] hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-16">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loxcy</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Loxcy™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  );
}
