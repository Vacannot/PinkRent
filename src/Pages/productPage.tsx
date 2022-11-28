import ProductPageComponent from "../components/ProductComponent/ProductPageComponent";
import Header from "../components/Header/Header";
import SearchIconComponent from "../components/ProductComponent/searchProductPage"

function ProductPage() {
    return (
        <>
        <Header />
         <SearchIconComponent />
        <ProductPageComponent />
        </>
    )
}

export default ProductPage;