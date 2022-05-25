import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import avatar from "../images/user.png";
import { useQuery } from "react-query";
// import logo from "../images/pw-log.png";

const Header = () => {
  const [currentUser] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const { data: user } = useQuery(["user", currentUser], () =>
    fetch(`https://power-wheels-ltd.herokuapp.com/user/${currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return (
    <>
      <header className="sticky top-0 z-50">
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
              {!currentUser ? (
                <Link
                  to="/login"
                  className="bg-primary text-black text-md lg:text-lg px-2 lg:px-4 py-1 lg:py-2 rounded font-primary"
                >
                  LOGIN
                </Link>
              ) : (
                <>
                  <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                      <div class="w-9 lg:w-10 rounded-full">
                        <img
                          className="border-2 border-primary aspect-square rounded-full"
                          src={user?.img || currentUser?.photoURL || avatar}
                          alt=""
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex="0"
                      class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-max"
                    >
                      <li>
                        <Link
                          to="/dashboard"
                          className="text-lg lg:text-xl font-primary mx-auto hover:bg-primary hover:text-accent"
                        >
                          {currentUser?.displayName}
                        </Link>
                      </li>
                      <li onClick={() => signOut(auth)}>
                        <p className="text-lg lg:text-xl font-primary flex flex-row items-center hover:bg-primary hover:text-accent">
                          <LogoutIcon className="w-6 lg:w-7"></LogoutIcon>
                          <p>Logout</p>
                        </p>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
        <div className="">
          <section
            onClick={() => setOpen(!open)}
            className={`z-30 block lg:hidden absolute top-10 mt-5 h-screen bg-accent  py-5 pl-6 pr-16 text-left shadow-md transition-all duration-700 ${
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
