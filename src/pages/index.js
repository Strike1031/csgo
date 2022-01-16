import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactDom from "react-dom";
import BackVideo from '.././parts/Background/BackVideo';

import Sidebar from '.././components/Sidebar/Sidebar';
import "../assets/scss/global.css";
import { Grid, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';


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
            <Route path="/" element={<Indexblock />}>
            </Route>


            <Route path="/partnership" element={<Partnership />}>
            </Route>

            <Route path="/donate" element={<Donate />}>
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
    <Grid container item xs={11} md={11} sm={11} lg={11} x1={11} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <div style={{ margin: "0px 0px 20px 40px" }}>
        <h1 style={{ color: 'white' }}>PARTNERSHIP</h1>
      </div>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(50px)', height: '90%', width: 'inherit', textAlign: 'left', paddingLeft: '40px' }}>
        <div style={{ marginTop: '40px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>We welcome companies that want to invest in our project.</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>If your company is interested in investing in our project and collaborating with each other, please fill out the form below</Typography>
        </div>
        {/* Company Name */}
        <form action="/" method="post">
          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Company Name</Typography>
            <span className="main-color" >&nbsp;(Required)</span>
          </div>
          <TextField name="partnership_name" variant="filled" style={{backgroundColor: 'white'}} fullWidth={true} />

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Official Email</Typography>
            <span className="main-color" >&nbsp;(Required)</span>
          </div>
          <TextField name="partnership_email" style={{ backgroundColor: 'white' }} fullWidth={true} />

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Describe the type of cooperation</Typography>
            <span className="main-color" >&nbsp;(Required)</span>
          </div>
          <TextareaAutosize id="m_describe" minRows={15}   style={{width: '100%'}} />

          <div style={{ marginTop: '20px' }}>
            <Button type="submit" label="Submit" variant="outlined" className="mysubmitButton">Submit</Button>
          </div>

        </form>

      </div>
    </Grid>
  )
}

const currencies = [
  {
    value: 'USDT',
    label: 'USDT',
  },
  {
    value: 'BNB',
    label: 'BNB',
  },
  {
    value: 'ETH',
    label: 'ETH',
  },
  {
    value: 'TRX',
    label: 'TRX',
  },
  {
    value: 'Other',
    label: 'Other tokens',
  },
];

function Donate() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <Grid container item xs={11} md={11} sm={11} lg={11} x1={11} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <div style={{ margin: "0px 0px 20px 40px" }}>
        <h1 style={{ color: 'white' }}>DONATE</h1>
      </div>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(50px)', height: '90%', width: 'inherit', textAlign: 'left', paddingLeft: '40px' }}>
        <div style={{ marginTop: '40px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>Our team is very grateful for your generosity</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>In order to advance the goals and development of our project for users who are interested in donating money to this project, we have made it possible for them to send their donations to us and participate in this development.</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>Thank you for your kindness.</Typography>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>Our Tron wallet address :</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>TDY5WstjQH432H6drYq39sMUF6Y2Cde5eX</Typography>
        </div>


        <div style={{ marginTop: '20px' }}>
          <Typography style={{ fontSize: '18px' }} className="main-color">Please only send USDT (TRC20) or TRX or other TRC10/TRC20 tokens</Typography>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>Our Binance Smart chain wallet address :</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>0xa1bF9a3f9181D7B257DC7e4ad7365a58fC6aa612</Typography>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography style={{ fontSize: '18px' }} className="main-color">Please only send BNB or BEP20 tokens</Typography>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>Our Ethereum wallet address :</Typography>
          <Typography style={{ color: 'white', fontSize: '18px' }}>0x6bF9e01FD977cbe3518f94280De6E4d1cfA0B20b</Typography>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography style={{ fontSize: '18px' }} className="main-color">Please only send ETH or ERC20 tokens</Typography>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography style={{ color: 'white', fontSize: '18px' }}>After the transaction is successful, fill the form below.</Typography>
        </div>

        {/* Company Name */}
        <form action="/" method="post">
          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Name</Typography>
          </div>
          <TextField name="donate_name" style={{ backgroundColor: 'white' }} fullWidth={true} />

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Email</Typography>
          </div>
          <TextField name="donate_email" style={{ backgroundColor: 'white' }} fullWidth={true} />

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '12px' }}>Currency</Typography>
          </div>
          <TextField id="odonate_currency" select value={currency} onChange={handleChange} style={{ backgroundColor: 'white' }} fullWidth={true}> 
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Amount</Typography>
          </div>
          <TextField name="donate_amount" style={{ backgroundColor: 'white' }} fullWidth={true} />

          <div style={{ marginTop: '20px', display: 'flex' }}>
            <Typography style={{ color: 'white', fontSize: '18px' }}>Tx Hash</Typography>
          </div>
          <TextField name="donate_txhash" style={{ backgroundColor: 'white' }} fullWidth={true} />

          <div style={{ marginTop: '20px' }}>
            <Button type="submit" label="Submit" variant="outlined" className="mysubmitButton">Submit</Button>
          </div>

        </form>

      </div>
    </Grid>
  )
}

export default Index;
