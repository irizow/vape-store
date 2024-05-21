import { categories } from "../utils/data";
import styles from "./dropdown.module.css"
import { Link } from "react-router-dom";

export default function Dropdown() {
    return (
        <div className={styles.dropdown}>
        {categories.map((item, index) =>
            <Link className={styles.link} to={`${item.name.toLowerCase()}`}>{item.name}</Link>
        )}
        </div>
    )
}