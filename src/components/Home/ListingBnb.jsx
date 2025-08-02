import React, { useContext, useState } from "react";
import PageSelect from "./PageSelect";
import HomeCardBnb from "./HomeCardBnb";
import { DataContext } from "../../App";



export default function ListingBnb() {
  const data = useContext(DataContext);
  const [currentPage , setCurrentPage]= useState(0);
  return (
    <>
      <div className="home-list-area">
        <PageSelect 
          ItemsCount={data.length} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
        <div className="list-bnb-result">
          Find {data && data.length} Item in search
        </div>

        <div className="list-bnb-area">
          {data &&
            data.map((item, index) => {
              return <HomeCardBnb key={index} item={item} />;
            })}
        </div>
       
      </div>
    </>
  );
}
