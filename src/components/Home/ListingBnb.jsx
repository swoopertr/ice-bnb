import React from "react";
import PageSelect from "./PageSelect";
import HomeCardBnb from "./HomeCardBnb";

export default function ListingBnb(){
    return (
        <>
            <div className="home-list-area">
                <div className="list-bnb-result">
                    Find 39 Item in search 
               </div>
                <div className="list-bnb-area">   
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
                    <HomeCardBnb />
               </div>
               <PageSelect />
            </div>
        </>
    )
}