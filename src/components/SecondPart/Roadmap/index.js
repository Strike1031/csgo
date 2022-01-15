import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Check from '@mui/icons-material/Check';
import { fontSize } from '@mui/system';

const steps = [
    {
        label: 'Q4',
        year: '2021',
        description: [
            "Building project team",
            "Project development and market research",
            "Smart contract creation on Binance Smart Chain",
            "Website launching",
            "Presence on social media",
        ]
    },
    {
        label: 'Q1',
        year: '2022',
        description: [
            "Powerful marketing with a professional team",
            "Launching our NFT collection on opensea.io",
            "Coinmarketcap listing",
            "Coingecko listing",
            "Private sales for investing companies",
            "Pre-sale 40% of total supply in 4 steps for community",
        ]
    },
    {
        label: 'Q2',
        year: '2022',
        description: [
            "Business development",
            "Giving rewards to pre-sale participants such as : NFT items, Membership card,…",
            "Hiring more experts for required positions",
            "Listing on major exchanges",
        ]
    },
    {
        label: 'Q3',
        year: '2022',
        description: [
            "Creation CSGO blockchain",
            "Launching the first metaverse CSGO market that items trade only with cryptocurrencies",
        ]
    },
    {
        label: 'Q4',
        year: '2022',
        description: [
            "Creating an NFT platform for selling items created by users",
            "Launching Mobile Applications for all devices",
            "Sponsoring global competitions and gatherings for the CSGO community",
        ]
    },
];

export default function Roadmap() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleButton = (mydata) => {
        setActiveStep(mydata);
    };

    return (
        <Box sx={{ maxWidth: 800 }}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{ padding: '50px 0 0 50px' }}>
                {steps.map((step, index) => (
                    <Step key={step + index}>
                        <div onClick={() => handleButton(index)}>
                            <StepLabel className='roadmap-step'>
                                {step.label}
                                <div>
                                    <span style={{color: '#424242'}}>{step.year}</span>
                                </div>
                            </StepLabel>
                            <StepContent>
                                {
                                    step.description.map((item, index2) => (
                                        <div key={item + index2} style={{ textAlign: 'left', display: 'flex' }}>
                                            <span>
                                                <CheckIcon style={{stroke: '#ff9f08', strokeWidth: '2px'}}/>
                                            </span>

                                            <span>&nbsp;&nbsp;{item}</span>
                                        </div>

                                    ))
                                }
                            </StepContent>
                        </div>

                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}