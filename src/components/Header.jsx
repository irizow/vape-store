import styles from './header.module.css'
import { CartIcon, HamburgerIcon, MagnifyingIcon } from '../assets/icons'
import vapeLogo from '../assets/images/logo1.png'
import { useState } from 'react'
import Dropdown from './Dropdown'


export default function Header() {
    const [isDropdown, setIsDropdown] = useState(false);

    const handleClick = ()=> {
        setIsDropdown(!isDropdown)
    }
    return (
        <>
        {isDropdown && <Dropdown /> }
        <div className={styles.header} >
            <div>
            <img className={styles.logo} src={vapeLogo}></img>
            <div onClick={(handleClick)}>
            <HamburgerIcon />
            </div>
            </div>
            <p>Vape Store</p>
            <div>
            <CartIcon />
            <MagnifyingIcon />
            </div>
        </div>
        </>
    )
}