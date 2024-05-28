import { useCart } from "../../utils/shoppingCart";
import { PlusIcon, MinusIcon, CloseIcon, RubbishIcon } from "../../assets/icons";
import styles from "./cartpage.module.css"
import { useState, useEffect, useRef } from "react";
import { products } from "../../utils/data";

export default function CartPage({isLoaded}) {
    const {cart, total, setIsCart, setTotal, removeFromCart, updateQuantity, updateTotal } = useCart();

    

    useEffect(() => {
        updateTotal()
    }, [cart, setTotal]);

    const CartProduct = ({product}) => {

        const [quantity, setQuantity] = useState(product.quantity)

      

        useEffect(() => {
            updateTotal()
        }, [quantity]);

        
        
        const handleQuantity = (qty, type) => {
            if (type === "button") {
            updateQuantity(product, qty, type)
            console.log(`Button clicked. Qty: ${qty} product${product} quantity${product.quantity} `);
            setQuantity(Math.max(0, quantity + qty))
        }
            else {
                updateQuantity(product, qty, type)
                setQuantity(qty)
            }
            
        }



        return (
        <div key={product.product.id} className={styles.productbox}>
                    <img src={product.product.img} />
                    <p key={product.product.id}>
                        {product.product.name}
                    </p>
                <div className={styles.information}>
                    <div className={styles.quantity}>
                        <button onClick={()=> handleQuantity(-1, "button")} ><MinusIcon/></button>
                        <input type="number" onChange={(e) => handleQuantity(e.target.value, "input")} value={quantity} ></input>
                        <button onClick={()=> handleQuantity(+1, "button")}><PlusIcon/></button>
                    </div>
                    <span>{product.product.price} €</span>
                    <button className={styles.rubbishbutton} onClick={()=> removeFromCart(product.product.id)} ><CloseIcon /></button>
                </div>
                </div>
        )
    }

    return (
        <div className={styles.modal}>
            <div className={styles.cartpage}>
                <button className={styles.closebutton} onClick={()=> setIsCart(false)} >
                        <CloseIcon />
                </button>
                <h1>Shopping Cart</h1>
                {cart.length > 0 ?
                cart.map((product) => (
                    <CartProduct key={product.product.id} product={product} />
                )) : 
                <p>Your cart is empty</p>
                }
                <div className={styles.checkoutdiv} >
                <p>Total: {total.toFixed(2)}€</p>
                <button className={styles.checkoutbutton} onClick={()=> alert(`Thank you for spending ${total}€ in this store`)} >
                    Checkout
                </button>
                </div>
            </div>
        </div>
    )
}
