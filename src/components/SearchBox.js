import React from "react";
import { MDBCol } from "mdbreact";

const SearchBox = ({searchChange}) => {
  return (
    <MDBCol className="d-flex justify-content-center mb-3">
      <input 
      className="form-control text-center w-50" 
      type="text" placeholder="Search"
      aria-label="Search"
      onChange = {searchChange} />
    </MDBCol>
  );
}

export default SearchBox;