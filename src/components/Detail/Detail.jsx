import { useParams } from 'react-router-dom'
import styles from './detail.module.css'
import { products } from '../../utils/data';
import { useCart } from '../../utils/shoppingCart';
import CartPage from '../CartPage/CartPage';
export function Detail() {
    const {addToCart, isCart, setIsCart} = useCart();
    const productId = useParams();

    const handleClick = () => {
        addToCart(product, 1)
        setIsCart(true)
    }

    console.log(products)
    const product = products.find((item) => item.id === productId.productId);
    console.log(productId.productId)
 
    return (
        <div className={styles.detail}>
        {isCart && <CartPage />}
        <div className={styles.wrapper}>
            <img className={styles.mainimage} src={product.img}></img>
            <div className={styles.information} >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}€ </p>
            <button className={styles.addbutton} onClick={handleClick} >Add to cart</button>
            </div>
        </div>
        </div>
    )
}