import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { makeStyles } from '@mui/styles';

import { Grid, ListItemButton } from '@mui/material';
import myLogoPng from "../../assets/images/cslogo.png"
import myPlayPng from "../../assets/images/play.png"
import myInventoryPng from "../../assets/images/inventory.png"
import myWhitepaperPng from "../../assets/images/whitepaper.png"
import myCooperationPng from "../../assets/images/cooperation.png"
import myDonatePng from "../../assets/images/donate.png"

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
        <Box variant="permanent" className='m_blur'>
            <List >
              <ListItemButton component="a" href="#simple-list" justifycontent='center'>
                <img className="listitem_logoimg" src={myLogoPng}/>
              </ListItemButton>
            </List>
            <hr style={{opacity: 0.5}}/>
            <List >
              <ListItemButton component="a" href="#simple-list" justifycontent='center'>
                <img className="listitem_img" src={myPlayPng} />
              </ListItemButton>
            </List>
            <hr style={{opacity: 0.5}}/>
            <List >
              <ListItemButton component="a" href="#simple-list" justifycontent='center'>
                <img className="listitem_img" src={myInventoryPng}/>
              </ListItemButton>
            </List>
            <List >
              <ListItemButton component="a" href="#simple-list" justifycontent='center'>
                <img className="listitem_img" src={myWhitepaperPng} />
              </ListItemButton>
            </List>
            <List >
              <ListItemButton component="a" href="#simple-list" justifycontent='center'>
                <img className="listitem_img" src={myCooperationPng} />
              </ListItemButton>
            </List>
            <List >
              <ListItemButton component="a" href="#simple-list" alignItems='center'>
                <img className="listitem_img" src={myDonatePng}  />
              </ListItemButton>
            </List>
            <div className='fixed-bottom'>
              <Typography paragraph  style={{opacity: 0.5, color: 'white'}}>
                CSGO Token © 2022
              </Typography>
            </div>
        </Box>
    </Box>


  );
}

export default Sidebar;