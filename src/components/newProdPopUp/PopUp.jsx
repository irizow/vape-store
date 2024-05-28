import styles from './popup.module.css'

export default function PopUp({product}) {
    return (
        <div className={styles.popupdiv} >
            <img src={product.img}></img>
            <p>{`${product.name} has been added to your cart`} </p>
        </div>
    )
}