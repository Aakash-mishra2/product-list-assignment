import styled from 'styled-components';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
</style>
const Wrapper = styled.div`
    cursor: pointer;
    background:white;
    border-radius: 20px;
    margin: 2rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease;
    display: flex;
    max-width: 20%;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        transform: scale(1.1);
    }
`;
const Title = styled.div`
    margin: 0.5rem;
    max-width: fit-content;
    text-align: center;
    h3{
        padding-top: 8px;
        margin-bottom: 5px;
        color: #272727;
        font-size: 16px;
    }
    p{
        color: gray;
        font-size: 12px;
        font-weight: 2;
        font-style: italic;
    }
`;
const ProductImage = styled.div`
    width: 300px;
    height: 180px;
    margin-top: 5px;
    text-align: justify;
    img{
        width: 80%;
        height: 100%;
        object-fit: contain;
        align: center;
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