import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Redux Toolkit
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 text-black bg-black rounded md:bg-transparent  md:p-0  "
                  aria-current="page"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="Card"
                  class="block py-2 px-3 text-black bg-black rounded md:bg-transparent  md:p-0  "
                  aria-current="page"
                >
                  Card
                </a>
              </li>
              <li>
                <a
                  href="Card"
                  class="block py-2 px-3 text-black bg-black rounded md:bg-transparent  md:p-0  "
                  aria-current="page"
                >
                  My bag 0
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
