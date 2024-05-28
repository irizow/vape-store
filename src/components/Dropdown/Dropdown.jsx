import { categories } from "../../utils/data";
import styles from "./dropdown.module.css"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Dropdown() {


    return (
        <div className={styles.dropdown}>
        {categories.map((item, index) =>
            <Link key={index} className={styles.link} to={`/category/${item.name.toLowerCase().split(" ").join("")}`}>{item.name}</Link>
        )}
        </div>
    )
}