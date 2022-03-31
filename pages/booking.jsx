import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Booking() {
  return (
    <>
      <Navbar />
      <div className="w-screen bg-white flex flex-col justify-center items-center pt-20">
        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{ backgroundImage: "url(/assets/trophy.png)" }}
              ></div>

              <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center text-primary-600 font-bold">Booking for Meal</h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4 md:flex">
                    <div class="mb-4 md:mr-2 md:mb-0 w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                        First Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="md:ml-2 w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                        Last Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="mb-4 flex md:flex-row flex-col">
                    <div className="w-full mr-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                        Email
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                        Phone number
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Phone number"
                      />
                    </div>
                    '
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0 w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Date
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="date"
                      />
                    </div>
                    <div class="md:ml-2 w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                        Time
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="time"
                      />
                    </div>
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0 w-full">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Reserve for
                      </label>
                      <div className="flex md:h-[50%]">
                        <input
                          class="w-full h-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="number"
                          defaultValue={1}
                        />
                        <div className="w-full h-full flex items-center text-center justify-center bg-gray-200 py-">Person</div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-secondary-1000 rounded-full hover:bg-secondary-500 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-[9vh]"></div>
      <Footer />
    </>
  );
}
