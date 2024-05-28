import { useCart } from "../../utils/shoppingCart";
import CartPage from "../CartPage/CartPage";
import { categories, products } from "../../utils/data";
import { Link, useParams } from "react-router-dom";
import styles from './store.module.css';
import { useState } from "react";
import { PlusIcon, MinusIcon } from "../../assets/icons";
import PopUp from "../newProdPopUp/PopUp";

export default function Store() {
    const { showPopUp } = useCart();
    const { addToCart, isCart, setIsCart, cart  } = useCart();
    const {categoryId} = useParams();
    const category = categories.find((category) => category.name.toLowerCase().split(" ").join("") === categoryId.toLowerCase())
    const categoryProducts = products.filter((product) => product.categoryId === category.id);
    
    const ProductItem = ({product}) => {
        const [quantity, setQuantity] = useState(1);

        const handleClick = (qty) => {
            setQuantity(prevQuantity => Math.max(0, prevQuantity + qty));
        }

        const handleChange = (e) => {
            setQuantity(e.target.value)
        }

        const addProduct = (e)=> {
            if(quantity===0) {
                alert("Select more than 0 items in order to add them to you cart :)")
            }
            else {
            addToCart(product, quantity)
            }
        }

        return (
            <div className={styles.productbox} >
                <Link className={styles.link} key={product.id} to={`/product/${product.id}`} >
                    <div className={styles.productcard} >
                        <p>{product.name}</p>
                        <img src={product.img} alt={product.alt}/>
                        <p>{(Math.round(product.price * 100) / 100).toFixed(2)}€</p>
                    </div>
                </Link>
                <div className={styles.quantity}>
                    <button onClick={()=> handleClick(-1)} ><MinusIcon/></button>
                    <input className={styles.input} type="number" onChange={(e) => handleChange(e)} value={quantity}></input>
                    <button onClick={()=> handleClick(+1)}><PlusIcon/></button>
                </div>
                <button className={styles.addbutton} onClick={()=>addProduct()}>Add to cart</button>
                </div>
        )
        
    }

 

    return (
        <>
        <div className={styles.store} >
            {showPopUp && <PopUp product={cart[cart.length+-1].product} />}
            {isCart && <CartPage />}
            {categoryProducts.map((product) =>(
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}