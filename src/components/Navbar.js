import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const links = [
    {
      id: 1,
      path: "/",
      name: "HOME",
      route: "public",
    },
    {
      id: 2,
      path: "/dashboard",
      name: "DASHBOARD",
      route: "private",
    },
    {
      id: 3,
      path: "/reviews",
      name: "REVIEWS",
      route: "public",
    },
    {
      id: 4,
      path: "/blogs",
      name: "BLOGS",
      route: "public",
    },
    {
      id: 5,
      path: "/portfolio",
      name: "PORTFOLIO",
      route: "public",
    },
  ];

  let routes;
  if (!user) {
    routes = links.filter((link) => link.route === "public");
  } else {
    routes = links;
  }
  return (
    <>
      <nav className="text-md lg:text-lg text-white flex flex-col lg:flex-row justify-around gap-5 lg:gap-10 font-primary">
        {routes.map((link) => (
          <CustomLink key={link.id} to={link.path}>
            {link.name}
          </CustomLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
