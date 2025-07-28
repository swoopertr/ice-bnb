import React, { useContext } from "react";
import PageSelect from "./PageSelect";
import HomeCardBnb from "./HomeCardBnb";
import { DataContext } from "../../App";

const ITEMS_PER_PAGE = 9;

export default function ListingBnb() {
  const data = useContext(DataContext);

  return (
    <>
      <div className="home-list-area">
        <div className="list-bnb-result">
          Find {data && data.length} Item in search
         
        </div>

        <div className="list-bnb-area">
          {data &&
            data.map((item, index) => {
              return <HomeCardBnb key={index} item={item} />;
            })}
        </div>
        <PageSelect />
      </div>
    </>
  );
}
