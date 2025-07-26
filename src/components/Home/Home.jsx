import React from "react";

import ListingBnb from "./ListingBnb";
import Map from "./Map"

export default function Home(){
return (
    <>
        <div className="home-area">
            <ListingBnb />
            <Map />
        </div>
    </>
);
}