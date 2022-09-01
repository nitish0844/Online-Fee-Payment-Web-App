import React from "react";

const Footer = () => {
  return (
    <footer className="foot" style={{ backgroundColor: "#6b0303" }}>
      <div className="text-center icons" style={{ color: "white" }}>
        <ul>
          <a
            href="https://m.facebook.com/profile.php?id=140159566017420"
            target="__blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCRt5IXEpSqW6t1dusW6mApg"
            target="__blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/mamcet/?originalSubdomain=in"
            target="__blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </ul>
      </div>
      <span className="text-center footext">
        © Copyright 2022, All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
