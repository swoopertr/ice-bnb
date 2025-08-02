import React, { useState } from "react";

const ITEMS_SEEN = 5;

export default function PageSelectArea({ currentPage, toplamSayfa, setPage }) {
 
  return (
   
    <div className="bnb-page-select-buttons">
        
      {/* baslangic durumu */}
      {currentPage < 4 && ( 
        <>
          {new Array(ITEMS_SEEN).fill(1).map((item, index) => {
         
            if (index + 1 <= toplamSayfa) {
              return (
                <>
                  <div
                    onClick={setPage}
                    key={index}
                    data-index={index}
                    className={`page-select-div ${
                      currentPage == index ? "active-page-select-div" : ""
                    }`}
                  >
                    {index + 1}
                  </div>
                </>
              );
            }
          })}
          {!(toplamSayfa <= 5) && (
            <>
              <div className="page-select-more-div">...</div>
              <div
                className="page-select-div"
                data-index={toplamSayfa - 1}
                onClick={setPage}
              >
                {toplamSayfa}
              </div>
            </>
          )}
        </>
      )}
      {/* orta durum */}
      {currentPage >= 4 &&
        currentPage + 4 <= toplamSayfa &&
        !(toplamSayfa <= 5) && (
          <>
            <div className="page-select-div" data-index={0} onClick={setPage}>
              1
            </div>
            <div className="page-select-more-div">...</div>

            {new Array(3).fill(1).map((item, index) => {
              return (
                <>
                  <div
                    onClick={setPage}
                    key={currentPage + index - 1}
                    data-index={currentPage + index - 1}
                    className={`page-select-div ${
                      currentPage == currentPage + index - 1
                        ? "active-page-select-div"
                        : ""
                    }`}
                  >
                    {currentPage + index}
                  </div>
                </>
              );
            })}
            <div className="page-select-more-div">...</div>
            <div
              className="page-select-div"
              data-index={toplamSayfa - 1}
              onClick={setPage}
            >
              {toplamSayfa}
            </div>
          </>
        )}
      {/* son durum */}
      {currentPage + 4 > toplamSayfa && !(toplamSayfa <= 5) && (
        <>
          <div className="page-select-div" data-index={0} onClick={setPage}>
            1
          </div>
          <div className="page-select-more-div">...</div>

          {new Array(ITEMS_SEEN).fill(1).map((item, index) => {
            if (toplamSayfa + index - 4 <= toplamSayfa) {
              return (
                <>
                  <div
                    onClick={setPage}
                    key={toplamSayfa + index - 3}
                    data-index={toplamSayfa + index - 3}
                    className={`page-select-div ${
                      currentPage == toplamSayfa + index - 5
                        ? "active-page-select-div"
                        : ""
                    }`}
                  >
                    {toplamSayfa + index - 4}
                  </div>
                </>
              );
            }
          })}
        </>
      )}
    </div>
  );
}
