import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-1000">
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white text-center">Thailand Office: 12/1 NB Building Nimmanhemin Soi. 13 T. Suthep A. Muang Chiang Mai 50200</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              onClick={() => {
                navigator.clipboard.writeText("+66-(0)53-894-948");
              }}
              className="mx-2 text-sm text-white hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Phone number: +66-(0)53-894-948
            </a>

            <a href="mailto:sales@mycostech.com" className="mx-2 text-sm text-white hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
              {" "}
              sales@mycostech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
