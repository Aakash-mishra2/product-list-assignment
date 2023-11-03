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
            {allProducts.map((item, index) => {
                return (
                    <ProductCard
                        key={index}
                        image={item.url}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                );
            })}
        </Wrapper>
    );
}

export default ProductList;