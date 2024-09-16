import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline, IoMdClose } from "react-icons/io";
// /images/bg.jpg
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);

  return (
    <div className=" capitalize w-screen relative   h-[664px] bg-[url('./images/bg.jpg')] bg-cover bg-center">
      <div class="absolute top-0 left-0 inset-0 bg-[rgba(0,0,0,0.5)]">
        <nav className="px-4 py-2 z-50 bg-black fixed w-full lg:flex ">
          <div className="flex justify-between  w-[100%] items-center">
            {/* part left */}
            <CiMenuBurger
              onClick={() => setShowMenu(!showMenu)}
              className="text-white text-[24px] cursor-pointer block lg:hidden"
            />
            {!showSearch && (
              <h2 className=" font-bold text-[24px] text-white block lg:hidden">
                La Sape
              </h2>
            )}

            <h2 className="lg:w-[200px] text-center font-bold text-[24px] text-white hidden lg:block">
              La Sape
            </h2>

            {/* part right */}

            <div className=" flex gap-10 justify-end  lg:w-[100%]  h-[40px] items-center ">
              {showSearch && (
                <div className="flex items-center gap-3">
                  <div className="relative flex  items-center">
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
                </div>
              )}
              {!showSearch && (
                <CiSearch
                  onClick={() => setShowSearch(true)}
                  className="text-white block cursor-pointer text-[24px] lg:hidden"
                />
              )}
              <div className="w-[20%]  relative hidden lg:flex items-center">
                <CiSearch className="absolute text-xl text-white z-50 left-2" />
                <input
                  type="text"
                  placeholder="Search...."
                  className=" lg:h-[30px] p-2 pl-8 w-full bg-transparent border-[1.5px] border-white text-white rounded-[50px] outline-none "
                />
              </div>

              <ul className="lg:flex items-center lg:h-[100%] lg:w-fit hidden text-xs lg:text-lg gap-4 text-white">
                <li className="hover:scale-[1.2] transition-[0.5s]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:scale-[1.2] transition-[0.5s]">
                  <Link to="/">Suit</Link>
                </li>
                <li className="hover:scale-[1.2] transition-[0.5s]">
                  <Link to="/">accessories</Link>
                </li>
                <li className="hover:scale-[1.2] transition-[0.5s]">
                  <Link to="/">Shoes</Link>
                </li>
                <li className="hover:scale-[1.2] transition-[0.5s]">
                  <Link to="/">Shirts</Link>
                </li>
              </ul>
              <div className=" lg:mr-[10px] hidden lg:flex gap-4 lg:h-[70%]">
                <Link to="/Signup">
                  <button className="bg-black border-[1.5px] px-5 gap-4 text-white rounded-[50px] hover:scale-[1.1] transition-[1s]">
                    Signup
                  </button>
                </Link>
                <Link to="/SingIn">
                  <button className=" bg-white border border-white px-5 gap-4 text-black rounded-[50px] hover:scale-[1.1] transition-[1s]">
                    Signup
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`fixed left-0 bg-black block lg:hidden  -translate-x-full transition-all ${
            showMenu ? "translate-x-0" : "translate-x-100"
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
                <Link to="/">Suit accessories</Link>
              </li>
              <li>
                <Link to="/">Shoes</Link>
              </li>
              <li>
                <Link to="/">Shirts</Link>
              </li>
            </ul>
            <div className="flex justify-center items-center w-full  text-center gap-4">
              <Link to="/Signup">
                <button className="bg-black border-[1.5px] p-2 px-8 gap-4 text-white rounded-md ">
                  Signup
                </button>
              </Link>
              <Link to="/SingIn">
                <button className="bg-white border border-white p-2 px-8 gap-4 text-black rounded-md">
                  Sign in
                </button>
              </Link>
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
