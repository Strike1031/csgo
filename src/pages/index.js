import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    <Router>
      <div className="main-body">
        <BackVideo />
        <Grid container spacing={2}>
          <Grid container item xs={3} md={1}>
            <Sidebar />
          </Grid>

          <Routes>
            <Route path="/" element={ <Indexblock />}>
             
            </Route>
            <Route path="/partnership" element={ <Partnership />}>

            </Route>
            <Route path="/donate" element={ <Donate />}>

            </Route>
          </Routes>
        </Grid>
      </div>
    </Router>

  );
}

function Indexblock() {
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

function Partnership() {
  return (
    <Grid container item xs={11} md={11}>
      <div>
        <h1>23535</h1>
      </div>
    </Grid>
  )
}

function Donate() {
  return (
    <Grid container item xs={11} md={11}>
    <div>
      <h1>fjesd</h1>
    </div>
  </Grid>
  )
}

export default Index;
