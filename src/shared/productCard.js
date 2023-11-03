import styled from 'styled-components';
const Wrapper = styled.div`
    cursor: pointer;
    background: rgb(231, 231, 231);
    border-radius: 20px;
    margin: 2rem 4rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease;
    display: flex;
    max-width: 40%;
    flex-direction: row;
    &:hover {
        transform: scale(1.1);
    }
`;
const Title = styled.div`
    margin: 0.5rem;
    max-width: fit-content;
    h3{
        padding-top: 4px;
        margin-bottom: 5px;
        color: #272727;
    }
    p{
        color: black;
    }
`;
const ProductImage = styled.div`
    width: 300px;
    height: 130px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ProductCard = ({ image, name, price, description }) => {
    return (
        <Wrapper>
            <ProductImage>
                <img src={image} alt={name} />
            </ProductImage>
            <Title>
                <h3>{name}</h3>
                <p>{description}</p>
                <h3>${price.toLocaleString()}</h3>
            </Title>
        </Wrapper>
    );
}
export default ProductCard;