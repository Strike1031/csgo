import React from "react";

import BackVideo from '.././parts/Background/BackVideo';
import bVideo from '../assets/videos/bg.mp4';

import Sidebar from '.././components/Sidebar/Sidebar';


function Index() {
  return (
    <div className="main-body" style={{backgroundImage: `url(../assets/videos/bg.mp4)`}}>
      <Sidebar/>
    </div>
  );
}

export default Index;
