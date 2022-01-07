import React from "react";
import './../../assets/scss/BackVideo.css';
import srcVideo from '../../assets/videos/nuke540p.webm';

const BackVideo = () => (
   <div>
       <video className="video-responsive" autoPlay loop muted>
          <source src={srcVideo} type="video/webm"/>
        </video>
    </div>
);

export default BackVideo;