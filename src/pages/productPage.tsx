import React from "react";
import {useState} from "react";
import ProductPageComponent from "../components/ProductComponent/ProductPageComponent";
import SearchIconComponent from "../components/ProductComponent/searchProductPage";

function ProductPage() {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <SearchIconComponent setSearchString={setSearchString} />
      <ProductPageComponent searchString={searchString} />
    </>
  );
}

export default ProductPage;
