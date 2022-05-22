import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Navbar from "./Navbar";
// import logo from "../images/pw-log.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="bg-accent text-white flex flex-row justify-between items-center px-4 lg:px-10 py-0  shadow-md relative z-40">
          <section className="block lg:hidden py-4">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <XIcon className="w-7 "></XIcon>
              ) : (
                <MenuIcon className="w-7 "></MenuIcon>
              )}
            </div>
          </section>
          <section>
            <Link to="/">
              <p className="text-xl font-primary">Power Wheels Ltd.</p>
              {/* {" "}
              <img className="w-[200px] lg:w-[250px]" src={logo} alt="" /> */}
            </Link>
          </section>
          <section className="lg:order-none hidden lg:block">
            <Navbar></Navbar>
          </section>
          <section>
            <div>
              <Link
                to="/login"
                className="bg-primary text-black text-md lg:text-lg px-2 lg:px-4 py-1 lg:py-2 rounded font-primary"
              >
                LOGIN
              </Link>
            </div>
            {/* {user ? (
              <div>
                <button
                  onClick={handleSignOut}
                  className="bg-blue-700 text-slate-100 text-md lg:text-lg px-2 lg:px-4 py-1  rounded inline-block"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="bg-blue-700 text-slate-100 text-md lg:text-lg px-2 lg:px-4 py-1 lg:py-2 rounded"
                >
                  LOGIN
                </Link>
              </div>
            )} */}
          </section>
        </div>
        <div className="">
          <section
            onClick={() => setOpen(!open)}
            className={`z-30 block lg:hidden absolute top-10 mt-5 inset-y-0 bg-accent  py-5 pl-6 pr-16 text-left shadow-md transition-all duration-700 ${
              open ? "left-0 " : "left-[-220px]"
            }`}
          >
            <Navbar></Navbar>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
