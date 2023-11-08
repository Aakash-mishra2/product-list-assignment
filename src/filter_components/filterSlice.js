import products from "../assets/products_Data"
import { createSlice } from "@reduxjs/toolkit";
const initialState = products.data;

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        p_c_filter: (state, action) => {
            /*
                category: [Apparel, Drinkware, Headgear], 
                price_range: [Below 3,  3 to 10, Above 10]
            */
           state.items = initialState.items;
            if (action.payload.category !== '') {
                state.items = initialState.items;
                const category = ['apparel', 'drinkware', 'headgear'];
                const selectedCategory = category[action.payload.category];
                state.items = state.items.filter((product) => product.category === selectedCategory);
            }
            if (action.payload.price_range !== '') {
                const selectedPriceRange = action.payload.price_range;
                if (selectedPriceRange == 0) {
                    state.items = state.items.filter((product) => parseInt(product.price) < 3);
                }
                if (selectedPriceRange == 1) {
                    state.items = state.items.filter((product) => (parseInt(product.price) >= 3) && (parseInt(product.price) < 10));
                }
                if (selectedPriceRange == 2) {
                    state.items = state.items.filter((product) => parseInt(product.price) >= 10);
                }
            }
        },
        removeAll : (state) => {
            state.items = initialState.items;
        }
    }
});

export const { p_c_filter, removeAll } = filterSlice.actions;
export default filterSlice.reducer;