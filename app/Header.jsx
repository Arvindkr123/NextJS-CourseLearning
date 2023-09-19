import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul
      style={{
        display: "flex",
        gap: "20px",
        listStyle: "none",
        justifyContent: "center",
      }}
    >
      <li>
        <Link style={{ textDecoration: "none" }} href={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} href={"/About"}>
          About
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} href={"/contact"}>
          Contact
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} href={"/aboutus"}>
          About Us
        </Link>
      </li>
    </ul>
  );
};

export default Header;
