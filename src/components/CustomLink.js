import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={
          match
            ? "border-l-4 lg:border-b-4 lg:border-l-0 border-primary px-2 py-1 lg:py-4 text-primary"
            : "border-l-4 lg:border-b-4 lg:border-l-0 border-transparent px-2 py-1 lg:py-4 hover:text-primary"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
