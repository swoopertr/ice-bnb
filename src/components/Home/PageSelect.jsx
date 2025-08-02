import React, { useState, useEffect } from "react";
import PageSelectArea from "./PageSelectArea";
import MoveArrows from "./MoveArrows";
import searchUtil from "../../data/searchFiltering";

const ITEMS_PER_PAGE = 9; //import.meta.env.ITEMS_PER_PAGE;

export default function PageSelect({
  ItemsCount,
  currentPage,
  setCurrentPage,
  setSearchResult,
  searchText,
}) {

  useEffect(() => {
    const resultObj = searchUtil.search(searchText, currentPage);
    console.log("resultObj", resultObj);
    setSearchResult && setSearchResult(resultObj);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage + 1 >= Math.ceil(ItemsCount / ITEMS_PER_PAGE)) return;
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage <= 0) return;
    setCurrentPage(currentPage - 1);
  };

  const setPage = (event) => {
    const indexNo = event.target.getAttribute("data-index");
    setCurrentPage(Number(indexNo));
  };
  return (
    <>
      <div className="bnb-page-select-area">
        <MoveArrows moveDirection={"left"} action={prevPage} />

        <PageSelectArea
          toplamSayfa={Math.ceil(ItemsCount / ITEMS_PER_PAGE)}
          currentPage={currentPage}
          setPage={setPage}
        />

        <MoveArrows moveDirection={"right"} action={nextPage} />
      </div>
    </>
  );
}
