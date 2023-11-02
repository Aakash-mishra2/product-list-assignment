import './productCard.css'
const ProductCard = ({image, name, price}) => {
    return (
        <div className='product'>
            <div className='product_image'>
                <img src={image} alt={name} />
            </div>
            <div className='product_info'>
                <h2>{name}</h2>
                <h3>${price.toLocaleString()}</h3>
            </div>
        </div>
    );
}
export default ProductCard;