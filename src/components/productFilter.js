import React from "react";
import DropdownMenu from "./dropDownMenu";
import SearchForm from "./UI/searchNav";

const NavFilter = () => {


  return (
<div className=" w-full mx-auto h-100 flex justify-between items-center mt-9">
  <div className="w-1/3 h-full  flex justify-center items-center">

  </div>
  <div className="w-1/3 h-full  flex justify-center items-center">
        <SearchForm />
  </div>

</div>
  )
};

export default NavFilter;
