import React from "react";
import profile_pic from "../../../static/assets/images/profile_pic.jpg";

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
        Ever since I was a child, technology and computers were my passion! I
        could never get enough new tech in my hands. I love making navigation
        easier for the user, whether it’s an employee or a customer. As a full
        stack developer, I put myself into the users shoes and implementing what
        I find would make applications easier for them to go through. I’m well
        organized, self efficient and I can produce a great value of user
        interface. My goal is to help users have a smoother and more satisfying
        experience.
      </div>
    </div>
  );
}
