import React, { useState } from "react";
import ProductList from "./productList";
import Pagination from "./pagination";
import styled from "styled-components";
import products from "./styles/products_Data";

const Heading = styled.h1`
    margin: 0;
    padding: 10px;
    padding-left: 40px;
    font-size: 45px;
    color: #ECE3CE;
    text-align: left;
    background: #0C356A;
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
            <Pagination
                totalItems={productData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <ProductList 
                allProducts={currentItems}
            />
            
        </React.Fragment>
    )
}
export default ProductFront;