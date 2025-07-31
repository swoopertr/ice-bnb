import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

const ITEMS_PER_PAGE = import.meta.env.ITEMS_PER_PAGE; //process.env.ITEMS_PER_PAGE;
const ITEMS_SEEN = import.meta.env.ITEMS_SEEN;

export default function PageSelect({ ItemsCount, currentPage, setCurrentPage }) {
  //ItemsCount = 131, currentPage = 0
  const [veriSayisi, setVeriSayisi] = useState(ItemsCount);
  const [anlikSayfa, setAnlikSayfa] = useState(currentPage);
  const toplamSayfa = Math.ceil(veriSayisi / ITEMS_PER_PAGE);

    const nextPage = () => {
        setCurrentPage(currentPage +1);
    }
    const prevPage = () => {
        setCurrentPage(currentPage -1);
    }

    const setPage = (event)=>{
        const indexNo = event.target.getAttribute('data-index');
        setCurrentPage(Number(indexNo));
    }


  return (
    <>
      <div className="bnb-page-select-area">
        <div className="bnb-page-left-arrow bnb-page-arrow-div">
          <IconButton
          onClick={prevPage}
            sx={{
              color: "white",
              backgroundColor: "black",
              marginRight: "10px",
              border: "1px black solid",
              fontSize: 30,
              "&:hover": {
                color: "secondary.main",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
            
        </div>
        {/* active-page-select-div */}
        <div className="bnb-page-select-buttons">
            {
                new Array(ITEMS_SEEN).fill(1).map((item,index)=>{
                    //currentPage
                    return <div 
                        onClick={setPage} 
                        key={index} 
                        data-index={index} 
                        className ={`page-select-div ${currentPage == index ? "active-page-select-div": ""}`}>
                            {index+1}
                        </div>
                })
            }

         
          <div className="page-select-more-div">...</div>
          <div className="page-select-div">{toplamSayfa}</div>
        </div>
        <div className="bnb-page-right-arrow bnb-page-arrow-div">
          <IconButton
           onClick={nextPage}
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
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
