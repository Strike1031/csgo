import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Roadmap from '../SecondPart/Roadmap/index'
import { fontWeight } from '@mui/system';
import '../../assets/scss/index_SecondPart.css'

import nftImage_1 from '../../assets/images/nft/1.png';
import nftImage_2 from '../../assets/images/nft/2.png';
import nftImage_3 from '../../assets/images/nft/3.png';
import nftImage_4 from '../../assets/images/nft/4.png';

function switchTabPalel_1(index, children) {
    switch (index) {
        case 0:
            return (
                <Box sx={{ p: 3 }}>
                    <Box style={{ height: '400px', marginBottom: '30px' }}>
                        <iframe src="https://www.youtube-nocookie.com/embed/wP1MAHJod3Q" width='100%' height='100%' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Box>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 1:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'black', textAlign: 'center' }}>{children}</Typography>
                </Box>
            );
        case 2:
            return (
                <Roadmap />
            );
        case 3:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>Our team intends to enable users to design their own items such as Skins, Gloves, Agents, ... and sell them as a non-fungible token.</Typography>
                    <Box style={{ width: '100%', textAlign: 'left' }}>
                        <a href='https://opensea.io/csgotoken' style={{ color: '#ff9f08', textDecoration: 'none', fontWeight: 'bold' }}>View on Opensea</a>
                    </Box>
                    <Grid container >
                        <Grid item xs={6} md={3}>
                            <img src={nftImage_1} />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={nftImage_2} />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={nftImage_3} />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={nftImage_4} />
                        </Grid>
                    </Grid>
                </Box>
            );
        case 4:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 5:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 6:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        default:
            return;
    }
}

function switchTabPalel_2(index, children) {
    switch (index) {
        case 0:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 1:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 2:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 3:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        case 4:
            return (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            );
        default:
            return;
    }
}

function TabPanel_1(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {/* {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            )} */}
            {value === index && switchTabPalel_1(index, children)}
        </div>
    );
}

function TabPanel_2(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {/* {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: 'white', textAlign: 'left' }}>{children}</Typography>
                </Box>
            )} */}
            {value === index && switchTabPalel_2(index, children)}
        </div>
    );
}
TabPanel_1.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

TabPanel_2.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,

    };
}
const useStyles = makeStyles({
    customStyleOnTab: {
        fontSize: '15px',
        color: 'rgba(255,255,255,0.7)'
    },
    customStyleOnActiveTab: {
        color: 'red'
    },
    activeTab: {
        fontSize: '17px',
        fontWeight: 'bold',
        color: 'white'
    }
})

const SecondPart = () => {
    const [firstValue, setFirstValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setFirstValue(newValue);
    };
    //second grid value
    const [SecondValue, setSecondValue] = React.useState(0);

    const handleSecondGridChange = (event, newValue) => {
        setSecondValue(newValue);
    };

    return (
        <Grid container item xs={12} md={12} >
            <Grid item xs={6} md={12} className='m_blur_part' style={{ height: '70%', marginTop: '15px' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={firstValue} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={<span className={firstValue === 0 ? classes.activeTab : classes.customStyleOnTab}>About Us</span>} {...a11yProps(0)} />
                            <Tab label={<span className={firstValue === 1 ? classes.activeTab : classes.customStyleOnTab}>News</span>} {...a11yProps(1)} />
                            <Tab label={<span className={firstValue === 2 ? classes.activeTab : classes.customStyleOnTab}>Roadmap</span>} {...a11yProps(2)} />
                            <Tab label={<span className={firstValue === 3 ? classes.activeTab : classes.customStyleOnTab}>NFT</span>} {...a11yProps(3)} />
                            <Tab label={<span className={firstValue === 4 ? classes.activeTab : classes.customStyleOnTab}>Distribution</span>} {...a11yProps(4)} />
                            <Tab label={<span className={firstValue === 5 ? classes.activeTab : classes.customStyleOnTab}>Pre-sale</span>} {...a11yProps(5)} />
                            <Tab label={<span className={firstValue === 6 ? classes.activeTab : classes.customStyleOnTab}>Our Partners</span>} {...a11yProps(6)} />
                        </Tabs>
                    </Box>
                    <TabPanel_1 value={firstValue} index={0}>
                        The first metaverse marketplace blockchain-based for CSGO equipment Our goal is to develop a next-generation platform for video game players that allows them to purchase and trade gaming equipment in metaverse world, as well as invest in the cryptocurrency world. We increase the transparency of transactions with the help of blockchain technology
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={1}>
                        no post yet!
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={2}>
                        RoadMap
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={3}>
                        Our team intends to enable users to design their own items such as Skins, Gloves, Agents, ... and sell them as a non-fungible token.
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={4}>
                        Distribution
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={5}>
                        Pre-sale
                    </TabPanel_1>
                    <TabPanel_1 value={firstValue} index={6}>
                        Our Partners
                    </TabPanel_1>
                </Box>
            </Grid>
            {/* Second Part Grid */}
            <Grid item xs={6} md={12} className='m_blur_part' style={{ height: '24%' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={SecondValue} onChange={handleSecondGridChange} aria-label="basic tabs example">
                            <Tab label={<span className={SecondValue === 0 ? classes.activeTab : classes.customStyleOnTab}>CSGO Token Details</span>} {...a11yProps(0)} />
                            <Tab label={<span className={SecondValue === 1 ? classes.activeTab : classes.customStyleOnTab}>Community</span>} {...a11yProps(1)} />
                            <Tab label={<span className={SecondValue === 2 ? classes.activeTab : classes.customStyleOnTab}>Airdrop</span>} {...a11yProps(2)} />
                            <Tab label={<span className={SecondValue === 3 ? classes.activeTab : classes.customStyleOnTab}>Employment</span>} {...a11yProps(3)} />
                            <Tab label={<span className={SecondValue === 4 ? classes.activeTab : classes.customStyleOnTab}>Contact Us</span>} {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                    <TabPanel_2 value={SecondValue} index={0}>
                        CSGO Token Details
                    </TabPanel_2>
                    <TabPanel_2 value={SecondValue} index={1}>
                        Community
                    </TabPanel_2>
                    <TabPanel_2 value={SecondValue} index={2}>
                        To participate in AirDrop and be informed of its conditions, please click on the link below :
                    </TabPanel_2>
                    <TabPanel_2 value={SecondValue} index={3}>
                        To find out the employment conditions in our team, please click on the link below :
                    </TabPanel_2>
                    <TabPanel_2 value={SecondValue} index={4}>
                        Our team does its best to communicate 24/7 with users, so do not hesitate to contact us and click on the link below to communicate :
                    </TabPanel_2>
                </Box>
            </Grid>
        </Grid>

    );
}

export default SecondPart;