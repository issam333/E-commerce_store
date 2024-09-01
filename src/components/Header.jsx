import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline, IoMdClose } from "react-icons/io";

// /images/bg.jpg
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-screen relative   h-[664px] bg-[url('./images/bg.jpg')] bg-cover bg-center">
      <div class="absolute top-0 left-0 inset-0 bg-[rgba(0,0,0,0.5)]">
        <nav className="px-4 py-5  z-50    bg-black fixed w-full ">
          <div className="flex justify-between gap-4 lg:gap-0 items-center">
            <CiMenuBurger
              onClick={() => setShowMenu(!showMenu)}
              className="text-white text-[24px] cursor-pointer block lg:hidden"
            />

            {!showSearch && (
              <h2 className="font-bold text-[24px] text-white block lg:hidden">
                La Sape
              </h2>
            )}
            <h2 className="font-bold text-[24px] text-white hidden lg:block">
              La Sape
            </h2>

            {showSearch && (
              <>
                <div className="relative flex items-center">
                  <CiSearch className="absolute text-xl text-white z-50 left-2" />
                  <input
                    type="text"
                    placeholder="Search...."
                    className=" p-2 pl-8 w-full bg-transparent border border-white text-white rounded-md outline-none "
                  />
                </div>
                <IoIosCloseCircleOutline
                  onClick={() => setShowSearch(false)}
                  className="text-white text-2xl cursor-pointer  block lg:hidden bg-black"
                />
              </>
            )}
            {!showSearch && (
              <CiSearch
                onClick={() => setShowSearch(true)}
                className="text-white block cursor-pointer text-[24px] lg:hidden"
              />
            )}
            <div className="w-[50%] relative hidden lg:flex items-center">
              <CiSearch className="absolute text-xl text-white z-50 left-2" />
              <input
                type="text"
                placeholder="Search...."
                className=" p-2 pl-8 w-full bg-transparent border border-white text-white rounded-md outline-none "
              />
            </div>

            <ul className="hidden lg:flex text-xs lg:text-lg gap-4 text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Suit</Link>
              </li>
              <li>
                <Link to="/">suit accessories</Link>
              </li>
              <li>
                <Link to="/">shoes</Link>
              </li>
              <li>
                <Link to="/">shirts</Link>
              </li>
            </ul>
            <div className="hidden lg:flex gap-4">
              <button className="bg-black border p-2 px-8 gap-4 text-white rounded-md">
                Log in
              </button>
              <button className="bg-white border border-white p-2 px-8 gap-4 text-black rounded-md">
                sign up
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`fixed left-0 bg-black block sm:hidden  -translate-x-full transition-all ${
            showMenu && "translate-x-0"
          }  h-full z-[99999] w-full`}
        >
          <div className="w-[90%] flex flex-col justify-between gap-10 mx-auto">
            <div className="flex items-center py-4 justify-between">
              <IoMdClose
                onClick={() => setShowMenu(false)}
                className="text-white text-[24px] cursor-pointer"
              />
              <h2 className="font-bold text-[24px] text-white text-center">
                La Sape
              </h2>
            </div>
            <ul className="text-lg flex flex-col justify-between gap-8  text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Suit</Link>
              </li>
              <li>
                <Link to="/">suit accessories</Link>
              </li>
              <li>
                <Link to="/">shoes</Link>
              </li>
              <li>
                <Link to="/">shirts</Link>
              </li>
            </ul>
            <div className="flex justify-center items-center w-full  text-center gap-4">
              <button className="bg-black border p-2 px-8 gap-4 text-white rounded-md">
                Log in
              </button>
              <button className="bg-white border border-white p-2 px-8 gap-4 text-black rounded-md">
                sign up
              </button>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto">
          <div className="absolute top-1/3">
            <h2 className="text-[64px] text-white font-bold">La Sape</h2>
            <p className="text-[32px] text-white">
              Société des Ambianceurs et des Personnes Élégantes
            </p>
            <button className="bg-white mt-4 duration-700  transition-all hover:bg-black hover:text-white  p-3 px-8 gap-4 text-black rounded-md">
              shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
