import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Backdrop from "../shared/backDrop";
import "./filter_Modal.css";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { p_c_filter } from "./filterSlice";
import { useDispatch } from "react-redux";

const ModalOverlay = (props) => {
    const content = (
        <div className={`modal ${props.className}`}>
            <div className={`modal__content ${props.contentClass}`}>
                <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                    {props.children}
                </form>
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </div >
    )
    return ReactDOM.createPortal(content, document.getElementById('modal'));
}

const FilterModal = (props) => {
    const dispatch = useDispatch();
    const [properties, setProperties] = useState({
        category: '',
        price_range: '',
    })
    const handleChange = (event) => {
        event.preventDefault();
        setProperties((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }

        })
    };
    const applyFilter = () => {

    }
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.closeBox} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay

                    footer={<button style={{ width: '100px', background: 'red' }} onClick={() => dispatch(p_c_filter(properties))}>Apply</button>}
                    onSubmit = {handleChange}
                >
                    <Box className="box" sx={{ minWidth: 60 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={properties.price_range}
                                label="Price Range"
                                name="price_range"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}> Below $3 </MenuItem>
                                <MenuItem value={1}> Between $3 to $10 </MenuItem>
                                <MenuItem value={2}> Above $10 </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className="box" sx={{ minWidth: 60 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={properties.category}
                                label="Category"
                                name="category"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Apparel</MenuItem>
                                <MenuItem value={1}>Drinkware</MenuItem>
                                <MenuItem value={2}>Headgear</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </ModalOverlay>
            </CSSTransition>
        </React.Fragment>
    );
}
export default FilterModal;