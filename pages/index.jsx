/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Navbar />

      <div className="relative bg-white overflow-hidden sm:h-[90vh]">
        <div className="overflow-hidden mt-15 sm:hidden block">
          <img className="w-full object-cover " src="/assets/trophy.png" alt="" />
        </div>
        <div className="max-w-7xl mx-auto flex h-full justify-center sm:justify-start">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-[90vh] w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
            </Popover>
            <main className="mt-10 sm:mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl">
                    <img src="/assets/logo.png" alt="" />
                  </span>
                  <span className="block text-secondary-500 xl">MyCos Tech.</span>
                </h1>
                <p className="mt-3 text-base text-primary-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Chef table for your next meal.
                  <br /> Cooked by the best chef in Chiang Mai.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/menu"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-1000 hover:bg-secondary-500 md:py-4 md:text-lg md:px-10"
                    >
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-1000 hover:bg-secondary-500 md:py-4 md:text-lg md:px-10">
                        Menu
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/booking">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary-1000 bg-secondary-100 hover:bg-secondary-1000 hover:text-white md:py-4 md:text-lg md:px-10">
                        Booking
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden mt-15 sm:block hidden">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/assets/trophy.png" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
