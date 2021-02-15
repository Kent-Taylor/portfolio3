import React from "react";
import ReactPlayer from "react-player"
import YouTubePlaylist from 'react-youtube-playlist';
import 'react-youtube-playlist/dist/styles'
import { NavLink, Link } from "react-router-dom";
import profile_pic from "../../../static/assets/images/profile_pic.png";
import Tilt from "react-parallax-tilt";


export default function () {
    return (
        <div className="videos-container">
            {/* <button type="button" href="" */}
            <ReactPlayer className="video"
                url="https://youtube.com/playlist?list=PLYU4z_dsLnD7qGJZ073a2URI9dK9KCo_r"
            />
            <ReactPlayer className="video"
                url="https://youtu.be/ecxAQcB0b5E"
            />

            <ReactPlayer className="video"
                url="https://youtu.be/0Cbj05nvXqM"
            />

            <ReactPlayer className="video"
                url="https://www.youtube.com/watch?v=dPpFw_SxmQ0"
            />

            <ReactPlayer className="video"
                url="https://www.youtube.com/watch?v=-ii3nagCfeA"
            />


        </div>


    );
}
