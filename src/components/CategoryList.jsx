
import styles from './categorylist.module.css'
import { categories } from '../utils/data'
import { Link } from 'react-router-dom'

export default function CategoryList() {

    
    return (
        <div className={styles.div}>
        {categories.map((item, index) => (
            <Link className={styles.box} to={`${item.name.toLowerCase()}`}> 
                <img alt={item.alt} src={item.img} />
                <div className={styles.boxmodal} >
                <p>{item.name}</p>
                </div>
            </Link>
        ))}
        </div>
    )
}