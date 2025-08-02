import React from "react";

import ListingBnb from "./ListingBnb";
import Map from "./Map";

export default function Home({currentPage , setCurrentPage, setSearchResult, searchText}){


return (
    <>
        <div className="home-area">
            <ListingBnb 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                setSearchResult={setSearchResult} 
                searchText={searchText}
                />
            <Map />
        </div>
    </>
);
}