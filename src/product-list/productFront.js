import React, { useState } from "react";
import ProductList from "./productList";
import Pagination from "./pagination";
import styled from "styled-components";
import filter from "../assets/filter.png";
import FilterModal from "../store/filter_components/filter_Modal";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ECE3CE;
    background: #132043;
    padding: 5px;
`;

const Heading = styled.h1`
    margin: 0;
    padding: 10px;
    padding-left: 40px;
    font-size: 45px;
    text-align: left;
`;

const ProductFront = () => {

    const productData = useSelector((state) => state.filter.items);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentItems = productData.slice(firstPostIndex, lastPostIndex);

    const [openFilter, setOpenFilter] = useState(false);
    const toggleBox = () => setOpenFilter(p => !p);

    return (
        <React.Fragment>
            <FilterModal show={openFilter} closeBox={toggleBox} />
            <NavBar>
                <Heading>Product List</Heading>
                <Button
                    variant="outlined"
                    onClick={toggleBox}
                    style={{ 
                        color: 'white', 
                        marginRight: '50px',
                        borderWidth: 'thick',

                    }}
                >
                    <img
                        style={{
                            width: '35px',
                            height: '35px',
                            marginRight: '10px'
                        }}
                        src={filter}
                        alt="filter" />
                    <h2>Filters</h2>
                </Button>
            </NavBar>
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