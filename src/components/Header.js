import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import logo from "../images/pw-log.png";

const Header = () => {
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
      <header className="flex flex-row justify-between items-start lg:items-center p-2 lg:p-4">
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
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-fit">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost normal-case text-xl"
              >
                <MenuIcon className="w-8"></MenuIcon>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto w-fit bg-base-100 text-base-content">
                {menu}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-ghost normal-case text-xl"
                >
                  <XIcon className="w-8"></XIcon>
                </label>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
