import './styles/pagination.css';
import Pagination from "@mui/material/Pagination";
import styled from 'styled-components';
const Pagn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 14px;
    margin-top: 10px;
`;
const Pagination_ = (
    {
        totalItems,
        postsPerPage,
        setCurrentPage,
        currentPage,
    }
) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <Pagn>
        <Pagination 
        count={Math.ceil(totalItems/postsPerPage)}
        onClick={(event) => setCurrentPage(String(event.target.innerHTML).charAt(0))}
        boundaryCount={2}
        size='large'

        />

        </Pagn>
    );
}
export default Pagination_;