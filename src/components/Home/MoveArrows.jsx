import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

export default function MoveArrows({
    moveDirection,
    action
}){
    return (    
        <div className={`bnb-page-${moveDirection}-arrow bnb-page-arrow-div`}>
          <IconButton
            onClick={action}
            sx={{
                color: "white",
                backgroundColor: "black",
                marginLeft: "10px",
                border: "1px black solid",
                "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
            }}
            >
            {moveDirection == 'right' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
          </IconButton>
        </div>
    )
}