import React from "react";
import reactDom from "react-dom";
import BackVideo from '.././parts/Background/BackVideo';

import Sidebar from '.././components/Sidebar/Sidebar';
import "../assets/scss/global.css";
import { Grid } from "@mui/material";


import SecondPart from '../components/Index/SecondPart'
import ThirdPart from '../components/Index/ThirdPart'

//This is the first page ==containers sidebar and two blocks--rightside and beyond
function Index() {
  return (
    <div className="main-body">
      <BackVideo />
      <Grid container spacing={2}>
        <Grid container item xs={3} md={1}>
          <Sidebar />
        </Grid>
        {secondblock()}
      </Grid>
    </div>
  );
}

function secondblock() {
  return (
    <>
      <Grid container item xs={6} md={6}>
        <SecondPart />
      </Grid>
      <Grid container item xs={3} md={5}>
        <ThirdPart />
      </Grid>
    </>
  )
}

export default Index;
