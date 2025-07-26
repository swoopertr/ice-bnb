import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

export default function PageSelect(){
    return (
        <>
            <div className="bnb-page-select-area">
                <div className="bnb-page-left-arrow bnb-page-arrow-div">
                    <IconButton
                    sx={{
                        color: 'white',
                        backgroundColor: 'black',
                        marginRight: '10px',
                        border: '1px black solid',
                        fontSize: 30,
                        '&:hover': {
                        color: 'secondary.main',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)', 
                        },
                    }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className="bnb-page-select-buttons">
                    <div className="first-select page-select-div active-page-select-div">
                        1
                    </div>
                    <div className="second-select page-select-div">
                        2
                    </div>
                    <div className="third-select page-select-div">
                        3
                    </div>
                    <div className="page-select-more-div">
                        ...
                    </div>
                    <div className="end-select page-select-div">
                        25
                    </div>
                </div>
                <div className="bnb-page-right-arrow bnb-page-arrow-div">
                    <IconButton
                    sx={{
                        color: 'white',
                        backgroundColor: 'black',
                        marginLeft: '10px',
                        border: '1px black solid',
                        '&:hover': {
                        color: 'secondary.main',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)', 
                        },
                    }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </div>
        </>
    )
}