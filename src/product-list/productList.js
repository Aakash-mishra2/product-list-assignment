import ProductCard from "../shared/UI_Elements/productCard";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

const ProductList = ({allProducts}) => {
    return (
        <Wrapper>
            {allProducts.map((coin, index) => {
                return (
                    <ProductCard
                        key={index}
                        image={coin.image}
                        name={coin.name}
                        price={coin.current_price}
                    />
                );
            })}
        </Wrapper>
    );
}

export default ProductList;