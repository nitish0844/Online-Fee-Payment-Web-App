import React from "react";
import logo from "./logo.png";
import "../index.css";
import { height } from "@mui/system";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#6b0303", height: "115px" }}>
      <span>
        <img
          src={logo}
          className="navc"
          alt="logo"
          style={{ margin: 10, height: "100px", width: "100px" }}
        />
      </span>
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: "380px",
        }}
      >
        M.A.M College of Engineering and Technology
      </span>
      <span>
        <img
          src={logo}
          className="navc"
          alt="logo"
          style={{ marginLeft: 380, height: "100px", width: "100px" }}
        />
      </span>
    </div>
  );
};

export default Navbar;
