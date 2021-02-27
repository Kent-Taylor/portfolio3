import React from "react";
import ReactPlayer from "react-player"
import YouTubePlaylist from 'react-youtube-playlist';
import 'react-youtube-playlist/dist/styles'
import { Link } from "react-router-dom";
import profile_pic from "../../../static/assets/images/profile_pic.png";
import Tilt from "react-parallax-tilt";


export default function () {
    return (
        <div className="videos-page-container">
            <div className="youtube-link-container">
                <a href="https://www.youtube.com/channel/UCIGOpSAOROQRqAHQ9YXwfAQ/playlists" target="_blank">View Channel</a>
            </div>
            <div className="videos-container">

                <ReactPlayer className="video"
                    // Deep dive into lists python
                    url="https://www.youtube.com/watch?v=2ygW1R5ylOk"
                />
                <ReactPlayer className="video"
                    // Manual exponents Tutorial
                    url="https://www.youtube.com/watch?v=B4q659qCZuE"
                />
                <ReactPlayer className="video"
                    // Reverse a sentence javascript Tutorial
                    url="https://www.youtube.com/watch?v=Sk5Ugofo0yg&t=32s"
                />
                <ReactPlayer className="video"
                    // Speech Recognition Tutorial
                    url="https://www.youtube.com/watch?v=2PUZrVrL37g&t=20s"
                />

                <ReactPlayer className="video"
                    // Guess the Number Game Tutorial
                    url="https://www.youtube.com/watch?v=DO4-oHkTeFE"
                />

                <ReactPlayer className="video"
                    // youtube-downloader
                    url="https://www.youtube.com/watch?v=ippjAuFS0bw"
                />

                <ReactPlayer className="video"
                    // bad-word filter
                    url="https://www.youtube.com/watch?v=ox1fGokLWPY&t=6s"
                />

                <ReactPlayer className="video"
                    // for-loop video
                    url="https://www.youtube.com/watch?v=dPpFw_SxmQ0"
                />

                <ReactPlayer className="video"
                    // histogram and bar graphs video
                    url="https://www.youtube.com/watch?v=-ii3nagCfeA"
                />

                <ReactPlayer className="video"
                    // morse code video
                    url="https://youtu.be/ecxAQcB0b5E"
                />

                <ReactPlayer className="video"
                    // while loops video
                    url="https://www.youtube.com/watch?v=R5SfkWWdGNo"
                />

                <ReactPlayer className="video"
                    // timer video
                    url="https://www.youtube.com/watch?v=iYdTkxA_-aI"
                />

                <ReactPlayer className="video"
                    // calculator video
                    url="https://www.youtube.com/watch?v=Fk7b-db-Mz0&t=2s"
                />

                <ReactPlayer className="video"
                    // random library video
                    url="https://youtube.com/playlist?list=PLYU4z_dsLnD7qGJZ073a2URI9dK9KCo_r"
                />

                <ReactPlayer className="video"
                    // fizzbuzz video
                    url="https://youtu.be/0Cbj05nvXqM"
                />


            </div>




        </div>


    );
}
