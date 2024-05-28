import styles from './searchlist.module.css'
import { products } from '../../utils/data';
import { Link } from 'react-router-dom';

export default function SearchList({search}) {
    const defaultProducts = products.slice(0,5);
    const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(search))
    const listedProducts = search === "" ? defaultProducts : filteredProducts
    return (
        <div className={styles.searchlist}>
            {listedProducts.map((product) =>
                <Link key={product.id} className={styles.link} to={`product/${product.id}`} >
                    <div className={styles.productwrapper}>
                        <img className={styles.images} src={product.img}></img>
                        <p>{product.name}</p>
                    </div>
                </Link>
            )}
        </div>

    )
}