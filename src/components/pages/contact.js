import React from "react";
import profile_pic from "../../../backgrounds/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="contact-bullet-points">
            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="phone"/>
                </div>

                <div className="text">
                    801-427-7833
                </div>
            </div>
            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="envelope"/>
                </div>

                <div className="text">
                    kredfox4@gmail.com
                </div>
            </div>
            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt"/>
                </div>

                <div className="text">
                    Lehi, UT
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}