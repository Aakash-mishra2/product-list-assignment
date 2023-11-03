import React, { useState } from "react";
import ProductList from "./productList";
import Pagination from "./pagination";
import styled from "styled-components";
import products from "./styles/products_Data";

const Heading = styled.h1`
    margin: 1rem 0;
    font-size: 70px;
    color: #ffe400;
    text-align: center;
    text-decoration: underline;
`;

const ProductFront = () => {

    const [productData, setProductData] = useState(products.data.items);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentItems = productData.slice(firstPostIndex, lastPostIndex);

    return (
        <React.Fragment>
            <Heading>Product List</Heading>
            <ProductList 
                allProducts={currentItems}
            />
            <Pagination
                totalItems={productData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </React.Fragment>
    )
}
export default ProductFront;