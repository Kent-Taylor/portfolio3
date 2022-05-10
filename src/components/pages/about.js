import React from "react";
import { NavLink, Link } from "react-router-dom";
import profile_pic from "../../../static/assets/images/profile_pic.png";
import Tilt from "react-parallax-tilt";


export default function () {
  return (
    <div className="about-container">
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

          <Tilt
            tiltEnable={true}
            scale={1}
            perspective={500}
            glareEnable={false}
            transitionSpeed={1500}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <p>
              "Kent is a Lead Instructor for ThriveDx and Varsity Tutors! He is certified in Information Technology, Full Stack Development, Business Web Design and Computer Technology. He has been teaching since 2020 at various boot camps and building websites and mobile applications from small companies to bigger companies such as 1800Contacts. Kent is from Knoxville TN where he lives with his sweet wife, two little girls and a puppy (of whom is the best little cuddle-bug)."
            <p>-Kent</p>
            </p>
          </Tilt>
          <Link to="/contact" className="go-to-contact">
            go to Contact Info
          </Link>
        </div>
      </div>
    </div>
  );
}
