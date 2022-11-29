import ProductPageComponent from "../components/ProductComponent/ProductPageComponent";
import Header from "../components/Header/Header";
import SearchIconComponent from "../components/ProductComponent/searchProductPage"
import Wave from "../components/Wave/Wave";
function ProductPage() {
    return (
        <>
        <Header />
        <Wave />
         <SearchIconComponent />
        <ProductPageComponent />
        </>
    )
}

export default ProductPage;