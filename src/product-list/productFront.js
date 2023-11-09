import React, { useState } from "react";
import ProductList from "./productList";
import Pagination from "./pagination";
import styled from "styled-components";
import filter from "../assets/filter.png";
import FilterModal from "../store/filter_components/filter_Modal";
import { useSelector, useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";

import { priceLowToHigh, priceHighToLow } from "../store/filter_components/filterSlice";

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
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.filter.items);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentItems = productData.slice(firstPostIndex, lastPostIndex);

    const [openFilter, setOpenFilter] = useState(false);
    const toggleBox = () => setOpenFilter(p => !p);

    const [sortType, setSortType] = useState();
    const handleChange = (event) => {
        setSortType(event.target.value);
        if (sortType === 0) { dispatch(priceLowToHigh); }
        if (sortType === 1) { dispatch(priceHighToLow); }
    }

    return (
        <React.Fragment>
            <FilterModal show={openFilter} closeBox={toggleBox} />
            <NavBar>
                <Heading>Product List</Heading>
                <Box sx={{ minWidth: 150 }}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label"> Sort By</InputLabel>
                        <Select
                            sx={{
                                margin: '5px', 
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                    borderWidth: 'thick',
                                },
                                '.MuiSvgIcon-root ': {
                                    fill: "white !important",
                                },
                                '#demo-simple-select': {
                                    color: 'white',
                                }
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortType}
                            label="Sort By"
                            name="sortType"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}> Price: Low to High </MenuItem>
                            <MenuItem value={1}> Price: high to low </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
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