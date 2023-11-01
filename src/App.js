import React from "react";
import { Route, Routes } from 'react-router-dom';
import ProductFront from "./product-list/productFront";

export default function App() {
   
        let routes = (
            <Routes>
                <Route path="/" element={<ProductFront />} />
            </Routes>
        )
    return (
        <div>
            {routes}
        </div>
    )
}