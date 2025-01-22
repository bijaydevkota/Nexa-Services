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
      <nav className="flex justify-between items-center p-5 sticky top-0 z-50 bg-[#0b363d] text-white">
        <div className="cursor-pointer text-2xl">
          <a href="#" className="text-orange-500 hover:text-white">
            Nexa
          </a>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md border border-orange-500 hover:bg-transparent">
          Login
        </button>
      </nav>

      <section className="text-center mt-32 px-4">
        <p className="text-4xl md:text-6xl md:w-8/12 mx-auto text-[#0b363d] font-bold leading-tight">
          Make Your Business Flourish with{" "}
          <span className="text-orange-500">Digital Marketing</span>
        </p>
        <p className="mt-6 text-gray-700 md:w-8/12 mx-auto">
          Save time on creating a website from scratch. Use a rich collection of
          ready-made websites to get your project off to a fast start opposed to
          using Content here, content here, making it look like readable
          English.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-[#0b363d] text-white px-8 py-2 rounded hover:bg-orange-500 hover:border-transparent">
            Try 30-days trial
          </button>
          <button className="border border-[#0b363d] text-[#0b363d] px-8 py-2 rounded hover:bg-orange-500 hover:text-white hover:border-orange-500">
            Schedule a call
          </button>
        </div>
      </section>

      <div className="w-full md:w-10/12 mx-auto mt-20">
        <Image src={dashboardImage} alt="image" className="w-full h-auto" />
      </div>

      <div
        id="about"
        className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center w-10/12 mx-auto mt-16"
      >
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={amazonImage}
          alt="image"
        />
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={googleImage}
          alt="image"
        />
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={lenovoImage}
          alt="image"
        />
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={paypalImage}
          alt="image"
        />
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={shopifyImage}
          alt="image"
        />
        <Image
          className="h-16 w-16 md:h-20 md:w-20 cursor-pointer"
          src={spotifyImage}
          alt="image"
        />
      </div>

      <div className="bg-[#0b363d] mt-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center mx-auto text-white px-4">
          <div className="text-center">
            <div className="bg-slate-500 p-6 flex items-center justify-center mx-auto h-20 w-20">
              <Users size={36} />
            </div>
            <p className="text-2xl md:text-3xl mt-6">100,000+</p>
            <p className="text-slate-400 text-sm md:text-lg">
              No. of People Join
            </p>
          </div>
          <div className="text-center">
            <div className="bg-slate-500 p-6  flex items-center justify-center mx-auto h-20 w-20">
              <Check size={36} />
            </div>
            <p className="text-2xl md:text-3xl mt-6">120+</p>
            <p className="text-slate-400 text-sm md:text-lg">
              Countries Reached
            </p>
          </div>
          <div className="text-center">
            <div className="bg-slate-500 p-6  flex items-center justify-center mx-auto h-20 w-20">
              <Hourglass size={36} />
            </div>
            <p className="text-2xl md:text-3xl mt-6">425,000+</p>
            <p className="text-slate-400 text-sm md:text-lg">
              No. of Session Given
            </p>
          </div>
          <div className="text-center">
            <div className="bg-slate-500 p-6 flex items-center justify-center mx-auto h-20 w-20">
              <Video size={36} />
            </div>
            <p className="text-2xl md:text-3xl mt-6">500K</p>
            <p className="text-slate-400 text-sm md:text-lg">Hours of Work</p>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="mt-16">
          <p className=" flex justify-center text-orange-500">Our Pricing</p>
          <p className="text-6xl mt-4 md:w-7/12 text-center text-[#0b363d] mx-auto justify-center">
            Choose The Plan That&apos;s Right For{" "}
            <span className="text-orange-500"> Your Business </span>{" "}
          </p>
        </div>

        <div className="gap-4 justify-center w-9/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">
          <div className="mt-16 pt-1 bg-white  rounded">
            <div className="bg-orange-50 m-4 p-4  rounded">
              <p className="text-2xl text-[#0b363d]">Free</p>
              <p className="mt-6 text-gray-600">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6 text-[#0b363d]">
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
              <p className="text-2xl text-[#0b363d]">Pro</p>
              <p className="mt-6 text-white">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6 text-[#0b363d]">
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
              <p className="text-2xl text-[#0b363d]">Enterprise</p>
              <p className="mt-6 text-gray-600">
                Explore the products and power small personal projects.
              </p>
            </div>
            <div className="mt-12 text-start px-12">
              <p className="text-4xl mt-6 text-[#0b363d]">
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

      <div
        id="contact"
        className="min-h-screen flex items-center justify-center py-12 px-6"
      >
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you. Please fill out the form below.
          </p>
          <form
            className="space-y-4"
            action="https://example.com/form-handler"
            method="POST"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b363d] text-white py-2 px-4 rounded-md hover:bg-[#135a65] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-white rounded-lg shadow dark:bg-[#0b363d] m-8">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#0b363d]">
                Nexa
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              NexaServices™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
