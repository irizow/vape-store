import { v4 as uuidv4 } from 'uuid'
import modImage from '../assets/images/modsection.png'
import disposableImage from '../assets/images/vapesection.png'
import podImage from '../assets/images/podsection.png'
import juiceImage from '../assets/images/juicesection.png'
import accessImage from '../assets/images/accessection.png'

export const categories = [
    {
        name: "Disposables",
        img: disposableImage,
        alt: "picture of disposable vapes"
    },
     {
        name: "Mods",
        img: modImage,
        alt: "picture of a mod vape",
    },
    {
        name: "Pod systems",
        img: podImage,
        alt: "picture of a vaping pod system",
    },
    {
        name: "Juices",
        img: juiceImage,
        alt: "picture of a nicotine salt juice",
    },
    {
        name: "Accessories",
        img: accessImage,
        alt: "picture of vape accessories"
    },
]
