import styles from './header.module.css'
import { CartIcon, HamburgerIcon, MagnifyingIcon } from '../../assets/icons'
import vapeLogo from '../../assets/images/logo1.png'
import { useState, useRef, useEffect } from 'react'
import { products } from '../../utils/data'
import Dropdown from '../Dropdown/Dropdown'
import SearchList from '../SearchList/SearchList'
import { useCart } from '../../utils/shoppingCart'
import CartPage from '../CartPage/CartPage'
import { Link } from 'react-router-dom'



export default function Header() {
    const { cart, totalItems } = useCart();
    const [isSearch, setIsSearch] = useState(false)
    const [isSearchList, setIsSearchList] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const {isCart, setIsCart} = useCart();
    const [search, setSearch] = useState("")
    const dropRef = useRef();
    const searchRef = useRef();

    const handleDropClick = ()=> setIsDropdown(true)
    const handleSearchClick = ()=> setIsSearchList(true)


    const handleClickOut = (e)=> {
        if(!dropRef.current.contains(e.target)) {
            setIsDropdown(false);
        }
        if(isSearch) {
        if(!searchRef.current.contains(e.target)) {
            setIsSearchList(false)
        }}
    }
    
    useEffect(() => {
        document.addEventListener('click', handleClickOut);
        return () => document.removeEventListener('click', handleClickOut);
    });

    const handleSearch = (e)=> {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <>
        {isDropdown && <Dropdown /> }
        {isCart && <CartPage isLoaded={true}/>}
        <div className={styles.header} >
            <div>
                <Link to="/">
                    <img className={styles.logo} src={vapeLogo}></img>
                </Link>
                <div ref={dropRef} onClick={e=> handleDropClick(e)}>
                    <HamburgerIcon />
                </div>
            </div>
            <Link className={styles.title} to="/">
                <p>Vape Store</p>
            </Link>
            <div>
                <div className={styles.cartdiv} onClick={()=> setIsCart(!isCart)}>
                    {cart.length > 0 && <div className={styles.cartitems}>{totalItems}</div>}
                    <CartIcon />
                </div>
            {isSearch && <input className={styles.input} ref={searchRef} onClick={handleSearchClick} onChange={handleSearch} type="text" placeholder="Search"></input>}
            {isSearchList && <SearchList search={search} /> }
            <div onClick={()=> setIsSearch(!isSearch)}>
                <MagnifyingIcon />
            </div>
            
            </div>
        </div>
        </>
    )
}



