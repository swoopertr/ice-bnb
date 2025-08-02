import React, { useContext, useState } from "react";
import PageSelect from "./PageSelect";
import HomeCardBnb from "./HomeCardBnb";
import { DataContext } from "../../App";



export default function ListingBnb({currentPage , setCurrentPage, setSearchResult, searchText}) {
  const contextData = useContext(DataContext);
  
  return (
    <>
      <div className="home-list-area">
        <PageSelect 
          ItemsCount={contextData.totalCount} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          setSearchResult={setSearchResult}
          searchText={searchText}
        />
        <div className="list-bnb-result">
          Find {contextData.totalCount && contextData.totalCount} Item in search
        </div>

        <div className="list-bnb-area">
          {contextData.totalCount &&
            contextData.data.map((item, index) => {
              return <HomeCardBnb key={index} item={item} />;
            })}
        </div>
       
      </div>
    </>
  );
}
