import React from "react";
import { NavLink, Link } from "react-router-dom";
import profile_pic from "../../../static/assets/images/profile_pic.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profile_pic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <p>I’ve always had a passion for technology and creating things. Front end
        design, backend de- velopment- I create clean, powerful functions with
        simple designs. I am passionate about user experience and proficient at
        UI. My core compe- tency is utilizing technology for problem solving.
        </p>
        <Link to="/contact" className="go-to-contact">
        go to Contact Info
        </Link>
      </div>
      
    </div>
  );
}
