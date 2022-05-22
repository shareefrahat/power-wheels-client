import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import logo from "../images/pw-log.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )} */}
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </>
  );
  return (
    <>
      <header className="flex flex-row justify-between items-center p-2 lg:p-4">
        <div className="bg-base-100">
          <Link to="/">
            <img
              className="w-[200px] lg:w-[250px] btn btn-ghost"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="block lg:hidden">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <span className="btn btn-ghost">
                <XIcon className="w-7"></XIcon>
              </span>
            ) : (
              <span className="btn btn-ghost">
                <MenuIcon className="w-7"></MenuIcon>
              </span>
            )}
            <section
              onClick={() => setOpen(!open)}
              className={`z-30 block lg:hidden absolute top-10 mt-5 inset-y-0 bg-base-100 py-5 pl-6 pr-16 text-left shadow-md transition-all duration-700 ${
                open ? "right-0 " : "right-[-200px]"
              }`}
            >
              <ul className="menu menu-vertical p-0">{menu}</ul>
            </section>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
