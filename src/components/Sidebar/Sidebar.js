import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { ListItemButton } from '@mui/material';
import myLogoPng from "../../assets/images/cslogo.png";
import myPlayPng from "../../assets/images/play.png";
import myInventoryPng from "../../assets/images/inventory.png";
import myWhitepaperPng from "../../assets/images/whitepaper.png";
import myCooperationPng from "../../assets/images/cooperation.png";
import myDonatePng from "../../assets/images/donate.png";
import myWhitePaper from '../../assets/pdf/white-paper.pdf';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    background: 'black',
    color: 'red'
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  height: '100%',
}));

const Sidebar = props => {

  const styles = useStyles();

  return (

    <Box sx={{ display: 'flex' }}>
      <Box variant="permanent" className='m-blur'>

        <List >
          <Link to="/">
            <ListItemButton >
              <img className="listitem_logoimg" src={myLogoPng} />
            </ListItemButton>
          </Link>
        </List>


        <hr style={{ opacity: 0.5 }} />
        <List >
          <Link to="/">
            <Tooltip title="Buy" placement='right'>
              <ListItemButton >
                <img className="listitem_img" src={myPlayPng} />
              </ListItemButton>
            </Tooltip>

          </Link>
        </List>


        <hr style={{ opacity: 0.5 }} />
        <List >
          <Link to="/">
            <Tooltip title="Marketplace (coming soon) " placement='right'>
              <ListItemButton >
                <img className="listitem_img" src={myInventoryPng} />
              </ListItemButton>
            </Tooltip>

          </Link>
        </List>


        <List >
            <Tooltip title="Whitepaper" placement='right'>
              <ListItemButton component="a" href={myWhitePaper} >
                <img className="listitem_img" src={myWhitepaperPng} />
              </ListItemButton>
            </Tooltip>
        </List>



        <List >
          <Link to="/partnership">
            <Tooltip title="Partnership" placement='right'>
              <ListItemButton  >
                <img className="listitem_img" src={myCooperationPng} />
              </ListItemButton>
            </Tooltip>

          </Link>

        </List>
        <List >
          <Link to="/donate">
            <Tooltip title="Donate" placement='right'>
              <ListItemButton >
                <img className="listitem_img" src={myDonatePng} />
              </ListItemButton>
            </Tooltip>

          </Link>

        </List>
        <div className='fixed-bottom'>
          <Typography paragraph style={{ opacity: 0.5, color: 'white' }}>
            CSGO Token © 2022
          </Typography>
        </div>
      </Box>
    </Box>
  );
}

export default Sidebar;