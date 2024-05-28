
import styles from './categorylist.module.css'
import { categories } from '../../utils/data'
import { Link } from 'react-router-dom'


export default function CategoryList() {

    
    return (
        <div className={styles.div}>
        {categories.map((item) => (
            <Link key={item.id} className={styles.box} to={`category/${item.name.toLowerCase().split(" ").join("")}`}> 
                <img alt={item.alt} src={item.img} />
                <div className={styles.boxmodal} >
                <p>{item.name}</p>
                </div>
            </Link>
        ))}
        </div>
    )
}