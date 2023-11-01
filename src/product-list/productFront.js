import React,{useState} from "react";
import ProductList from "./productList";
import Pagination from "./pagination";


const ProductFront = () => {

    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return(
        <React.Fragment>
        <ProductList />
        <Pagination />
        </React.Fragment>

    )
}
export default ProductFront;