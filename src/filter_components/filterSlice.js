import products from "../product-list/styles/products_Data"
import { createSlice } from "@reduxjs/toolkit";
const initialValue = products.data.items;

const filterSlice = createSlice({
    name: 'filter',
    initialValue,
    reducers: {

    }
});

export default filterSlice.reducer;