import styles from './advertising.module.css'
import vaporessoBanner from '../../assets/images/econanobanner.jpg'
import riotSaltsBanner from '../../assets/images/riotsaltsbanner.jpg'
import { Link } from 'react-router-dom'
import { products } from '../../utils/data'

const vaporessoLink = `product/${products[15].id}`;
const riotSaltsLink =  `product/${products[6].id}`;

export default function Advertising () {

    const Banner = ({link, img})=> {
        return (
            <div className={styles.banner}>
            <Link to={link}>
                <img src={img}></img>
            </Link>
            </div>
        )

    }

    return (
        <>
            <Banner link={vaporessoLink} img={vaporessoBanner} ></Banner>
            <Banner link={riotSaltsLink} img={riotSaltsBanner} ></Banner>
        </>
    )
}















