import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4 lg:justify-start lg:gap-10">
          {/* Logo */}
          <div className="text-3xl font-semibold italic text-white dancing-script">
            Feane
          </div>

          {/* Center Nav Links (Desktop) */}
          <ul className="hidden lg:flex lg:space-x-8 items-center flex-1 justify-center">
            <li>
              <span className="text-yellow-500 font-semibold cursor-pointer">
                HOME
              </span>
            </li>
            <li>
              <span className="text-white hover:text-yellow-500 cursor-pointer">
                MENU
              </span>
            </li>
            <li>
              <span className="text-white hover:text-yellow-500 cursor-pointer">
                ABOUT
              </span>
            </li>
            <li>
              <span className="text-white hover:text-yellow-500 cursor-pointer">
                BOOK TABLE
              </span>
            </li>
          </ul>

          {/* User Options (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
              <FaUser />
            </span>

            <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
              <FaShoppingCart />
            </span>

            <button className="text-white hover:text-yellow-500 cursor-pointer text-lg">
              <FaSearch />
            </button>

            <span className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 font-medium cursor-pointer">
              Order Online
            </span>
          </div>

          {/* Toggle button for mobile */}
          <button
            className="lg:hidden text-white focus:outline-none ml-auto text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <span className="text-2xl">&#9776;</span>}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center transition-all space-y-4 py-4">
            <ul className="flex flex-col space-y-2 items-center">
              <li>
                <span className="text-yellow-500 font-semibold cursor-pointer">
                  HOME
                </span>
              </li>
              <li>
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  MENU
                </span>
              </li>
              <li>
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  ABOUT
                </span>
              </li>
              <li>
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  BOOK TABLE
                </span>
              </li>
            </ul>

            <div className="flex items-center space-x-4">
              <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
                <FaUser />
              </span>

              <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
                <FaShoppingCart />
              </span>

              <button className="text-white hover:text-yellow-500 cursor-pointer text-lg">
                <FaSearch />
              </button>
            </div>

            <span className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 font-medium cursor-pointer">
              Order Online
            </span>
          </div>
        )}
      </div>
    </header>
    // <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
    //   <div className="max-w-screen-xl mx-auto px-4">
    //     <nav className="flex items-center justify-center py-4 lg:justify-start lg:gap-10">
    //       <div className="flex justify-around space-x-70 mx-auto">
    //         {/* Logo */}
    //         <div className="text-3xl font-semibold italic text-white dancing-script">
    //           Feane
    //         </div>

    //         {/* Center Nav Links (Desktop) */}
    //         <ul className="hidden lg:flex lg:space-x-8 items-center flex-1 justify-center">
    //           <li>
    //             <span className="text-yellow-500 font-semibold cursor-pointer">
    //               HOME
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               MENU
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               ABOUT
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               BOOK TABLE
    //             </span>
    //           </li>
    //         </ul>

    //         {/* User Options (Desktop) */}
    //         <div className="hidden lg:flex items-center space-x-4">
    //           <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaUser />
    //           </span>

    //           <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaShoppingCart />
    //           </span>

    //           <button className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaSearch />
    //           </button>

    //           <span className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 font-medium cursor-pointer">
    //             Order Online
    //           </span>
    //         </div>
    //       </div>

    //       {/* Toggle button for mobile */}
    //       <button
    //         className="lg:hidden text-white focus:outline-none ml-auto text-3xl"
    //         onClick={() => setIsOpen(!isOpen)}
    //         aria-label="Toggle navigation"
    //       >
    //         {isOpen ? <FaTimes /> : <span className="text-2xl">&#9776;</span>}
    //       </button>
    //     </nav>

    //     {/* Mobile Nav */}
    //     {isOpen && (
    //       <div className="lg:hidden flex flex-col items-center transition-all space-y-4 py-4">
    //         <ul className="flex flex-col space-y-2 items-center">
    //           <li>
    //             <span className="text-yellow-500 font-semibold cursor-pointer">
    //               HOME
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               MENU
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               ABOUT
    //             </span>
    //           </li>
    //           <li>
    //             <span className="text-white hover:text-yellow-500 cursor-pointer">
    //               BOOK TABLE
    //             </span>
    //           </li>
    //         </ul>

    //         <div className="flex items-center space-x-4">
    //           <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaUser />
    //           </span>

    //           <span className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaShoppingCart />
    //           </span>

    //           <button className="text-white hover:text-yellow-500 cursor-pointer text-lg">
    //             <FaSearch />
    //           </button>
    //         </div>

    //         <span className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 font-medium cursor-pointer">
    //           Order Online
    //         </span>
    //       </div>
    //     )}
    //   </div>
    // </header>
  );
};

export default Header1;
