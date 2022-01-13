import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@mui/styles';
import Roadmap from '../SecondPart/Roadmap/index'
import { fontWeight } from '@mui/system';
// import { Chart } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

// import { Chart, ArcElement } from 'chart.js'
import 'chart.js/auto';

import '../../assets/scss/index_SecondPart.css'

//Material Images
import nftImage_1 from '../../assets/images/nft/1.png';
import nftImage_2 from '../../assets/images/nft/2.png';
import nftImage_3 from '../../assets/images/nft/3.png';
import nftImage_4 from '../../assets/images/nft/4.png';
import bscscanLogoSvg from '../../assets/images/logo-bscscan.svg';

//    Material Iconts/
import CheckIcon from '@mui/icons-material/Check';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NoBackpackSharp } from '@mui/icons-material';

//     Import icon like linkedin, facebook, instagram
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

//     Import Team images
import nathen_Pruitt from '../../assets/images/team/nathen-Pruitt.jpg';
import joe_Shepard from '../../assets/images/team/joe-Shepard.jpg';
import oleksandr_Holovchenko from '../../assets/images/team/oleksandr-Holovchenko.jpg';
import nikita_Semenov from '../../assets/images/team/nikita-Semenov.jpg';
import zian_Kang from '../../assets/images/team/zian-Kang.jpg';
import jadon_Mullen from '../../assets/images/team/jadon-Mullen.jpg';
import sophia_Oconnell from '../../assets/images/team/sophia-Oconnell.jpg';
import nathifa_Yakubu from '../../assets/images/team/nathifa-Yakubu.jpg';
import alfred_Kadyn from '../../assets/images/team/alfred-Kadyn.jpg';
import yu_Wang from '../../assets/images/team/yu-Wang.jpg';




// Variables and functions
const my_nftImages = [nftImage_1, nftImage_2, nftImage_3, nftImage_4];

const my_chart_options = {
    responsive: true,
    //cutoutPercentage: 60,
    // animation: {
    //   animateScale: true
    // },
    // circumference: 1.5 * Math.PI,
    rotation: 173 * Math.PI,

    plugins: {
        legend: {
            display: false,
        },
    }
};
const my_presale_plan_data = [
    {
        title: 'Phase 1:',
        content: '500/000/000 Tokens ',
        price: '0.0005 BUSD',
    },
    {
        title: 'Phase 2:',
        content: '1/000/000/000 Tokens ',
        price: '0.00075 BUSD',
    },
    {
        title: 'Phase 3:',
        content: '8/500/000/000 Tokens  ',
        price: '0.001 BUSD',
    },
    {
        title: 'Phase 4:',
        content: '15/000/000/000 Tokens  ',
        price: ' 0.002 BUSD',
    },
    {
        title: 'Phase 5:',
        content: '15/000/000/000 Tokens ',
        price: '0.003 BUSD',
    },
    {
        title: 'Phase 6:',
        content: 'Listing in exchanges  ',
        price: '0.005 BUSD',
    }

];

function My_presale_plan(props) {
    const plan_datas = props.mydata;
    const Display_data = plan_datas.map((mydata, index) => {
        return (
            <Box key={index} marginBottom={'5px'}>
                <p style={{ alignItems: 'center', display: 'flex' }}>
                    <span style={{ alignItems: 'center', display: 'flex' }}>
                        <CheckIcon style={{ color: 'white', opacity: '50%' }} />
                    </span>
                    <span>&nbsp;&nbsp;</span>
                    <span style={{ color: 'white' }}>{mydata.title}</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>{mydata.content}</span>
                    <span>&nbsp;&nbsp;</span>
                    <span style={{ alignItems: 'center', display: 'flex' }}>
                        <ArrowRightAltIcon style={{ color: '#ff9f08' }} />
                        <span>&nbsp;&nbsp;</span>
                        <span>{mydata.price}</span>
                    </span>
                </p>
            </Box>
        )
    });

    return (
        <Box sx={{ p: 3 }} style={{ textAlign: 'left' }}>
            <Typography style={{ color: '#ff9f08', fontWeight: 'bold', fontSize: '18px' }}>Private Sale and Public Sale :</Typography>
            {Display_data}
        </Box>
    );
}

const my_chart_data = {
    datasets: [{
        data: [40, 10, 15, 16, 20],
        backgroundColor: ["rgb(43,87,151)", "rgb(255,159,8)", "rgb(185,29,71)", "rgb(0,171,169)", "rgb(38,138,255)"],
        // These labels and labelSuffix use the custom tooltips callbacks
        // They will also not trigger the legend
        label: '',
        // labelSuffix: "%",
        // pointStyle: "circle"
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Community (Pre-sales)", "Liquidity for Exchanges", "Team and advisors", "Business and development", "Partnership"],
};

function NftImageList(props) {
    const myLists = props.myListImages;
    const listItems = myLists.map((myList) =>
        <Grid item xs={6} md={3} key={myList}>
            <img src={myList} width={'90%'} />
        </Grid>
    );
    return (
        <Grid container >
            {listItems}
        </Grid>
    );
}

function switchTabPalel_1(index, children) {
    switch (index) {
        case 0:
            return (
                <Box sx={{ p: 3 }}>
                    <Box style={{ marginBottom: '30px' }}>
                        <iframe src="https://www.youtube-nocookie.com/embed/wP1MAHJod3Q" width='66%' height='300px' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                        <a href='https://opensea.io/csgotoken' className='href-image'>View on Opensea</a>
                    </Box>
                    {/* Map function */}
                    <NftImageList myListImages={my_nftImages} />
                    {/* <Grid container >

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
                    </Grid> */}
                </Box>
            );
        case 4:
            return (
                <Box>
                    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box style={{ width: '50%' }} id="chartJSContainer">
                            <Doughnut data={my_chart_data} options={my_chart_options} />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item md={6} lg={6} xs={6}>
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#ff9f08' }}>Total supply : {"   "}</Typography>
                                <Typography style={{ color: 'white' }}>100/000/000/000</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={6} xs={6}>
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#ff9f08' }}>Max supply :{"   "}</Typography>
                                <Typography style={{ color: 'white' }}>100/000/000/000</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


            );
        case 5:
            return (
                <My_presale_plan mydata={my_presale_plan_data} />
            );
        case 6:
            return (
                <Box sx={{ p: 3 }}>
                    <Grid container xs={12} md={12}>
                        <Grid item xs={3} md={3} sm={3}>
                            <a href='https://bscscan.com/'>
                                <img src={bscscanLogoSvg} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </a>
                        </Grid>
                    </Grid>

                </Box>
            );
        case 7:
            {/* It is unnecessary to use  <map> function---because ..*/}
            return (
                <Box sx={{ p: 3 }}>
                    <Grid container>
                        {/* CEO and CTO */}
                        <Grid container item x1={12} lg={12} sm={12} md={12} xs={12}>
                            <Grid container item xl={3} lg={3} sm={6} md={6} xs={12}>
                                <img src={nathen_Pruitt} class = "img-fitness"></img>
                                <p style={{textAlign: 'center', fontWeight: '700', fontSize: '1.5rem'}}>Nathen Pruitt</p>
                                <hr style={{width: '50%'}}/>
                                <p style={{textAlign: 'center'}}>Founder&nbsp;CEO</p>
                                <Box style={{textAlign: 'center'}}>
                                    <a href= "https://www.instagram.com/nathen_pruitt/">
                                        <InstagramIcon style={{color: '#c13584'}}/>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
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
            <Grid item xs={6} md={12} className='m-blur-part' style={{ height: '70%', marginTop: '15px' }}>
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
                            <Tab label={<span className={firstValue === 7 ? classes.activeTab : classes.customStyleOnTab}>Our Team</span>} {...a11yProps(7)} />
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
                    <TabPanel_1 value={firstValue} index={7}>
                        Our Team
                    </TabPanel_1>
                </Box>
            </Grid>
            {/* Second Part Grid */}
            <Grid item xs={6} md={12} className='m-blur-part' style={{ height: '24%' }}>
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