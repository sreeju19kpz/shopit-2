import React from "react";
import SearchFilter from "./SearchFilter";

const SearchOptions = ({ item }) => {
  return (
    <>
      <div className="default  bor-sty-sol bor-bot-wid-1px bor-col-lig-2 hei-50-px justify-con-cnt">
        <div className="default width-100-p padd-lef-10-px padd-rig-10-px ">
          <span className="default font-siz-20-px  ">Filters</span>
        </div>
      </div>
      <div className="default width-100-p ">
        {item &&
          item.expansion.map((obj) => {
            return <SearchFilter item={obj} />;
          })}
      </div>
    </>
  );
};

export default SearchOptions;
