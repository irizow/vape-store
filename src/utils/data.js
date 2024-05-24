import { v4 as uuidv4 } from 'uuid';
import modImage from '../assets/images/modsection.png'
import disposableImage from '../assets/images/vapesection.png'
import podImage from '../assets/images/podsection.png'
import juiceImage from '../assets/images/juicesection.png'
import accessImage from '../assets/images/accessection.png'
import pod1Img from '../assets/images/podsys/podsys1.jpg'
import pod2Img from '../assets/images/podsys/podsys2.jpg'
import pod3Img from '../assets/images/podsys/podsys3.jpg'
import juice1Img from '../assets/images/juices/salts1.jpg'
import juice2Img from '../assets/images/juices/salts2.jpg'
import juice3Img from '../assets/images/juices/salts3.jpg'
import juice4Img from '../assets/images/juices/salts4.jpg'
import dispo1Img from '../assets/images/dispos/elfbar.jpg'
import dispo2Img from '../assets/images/dispos/elfbar2.jpg'
import dispo3Img from '../assets/images/dispos/elfbar3.jpg'
import mod1Img from '../assets/images/mods/mods1.jpg'
import mod2Img from '../assets/images/mods/mods2.jpg'
import mod3Img from '../assets/images/mods/mods3.jpg'
import access1Img from '../assets/images/access/acess1.jpg'
import access2Img from '../assets/images/access/acess2.jpg'
import access3Img from '../assets/images/access/acess3.jpg'

const disposId = uuidv4();
const modsId = uuidv4();
const PodsysId = uuidv4();
const juicesId = uuidv4();
const accessorId = uuidv4();

export const categories = [
    {
        name: "Disposables",
        img: disposableImage,
        alt: "picture of disposable vapes",
        id: disposId,
    },
     {
        name: "Mods",
        img: modImage,
        alt: "picture of a mod vape",
        id: modsId,
    },
    {
        name: "Pod systems",
        img: podImage,
        alt: "picture of a vaping pod system",
        id: PodsysId,
    },
    {
        name: "Juices",
        img: juiceImage,
        alt: "picture of a nicotine salt juice",
        id: juicesId,
    },
    {
        name: "Accessories",
        img: accessImage,
        alt: "picture of vape accessories",
        id: accessorId,
    },
]

export const products = [
    {
      name: "Elf bar 600 puff",
      id: uuidv4(),
      categoryId: disposId,
      description: "Blueberry disposable vape with 600 puff. Intense flavor and 2% of nicotine",
      price: 8.00,
      img: dispo2Img,
      alt: "picture of a disposable vape",
    },

    {
        name: "Elf bar 5000 puff",
        id: uuidv4(),
        categoryId: disposId,
        description: "Energy drink flavor disposable vape with 5000 puff. Intense flavor and 2% of nicotine",
        price: 15.00,
        img: dispo1Img,
        alt: "picture of a disposable vape",
      },

      {
        name: "Elf bar 600 puff",
        id: uuidv4(),
        categoryId: disposId,
        description: "Mango disposable vape with 600 puff. Intense flavor and 2% of nicotine",
        price: 8.00,
        img: dispo3Img,
        alt: "picture of a disposable vape",
      },

      {
        name: "Pineapple nicotine salts",
        id: uuidv4(),
        categoryId: juicesId,
        description: "10ml bottle of pineapple flavored nicotine salts. 20mg/ml",
        price: 4.00,
        img: juice1Img,
        alt: "picture of a vaping juice",
      },

      {
        name: "Watermelon nicotine salts",
        id: uuidv4(),
        categoryId: juicesId,
        description: "10ml bottle of watermelon flavored nicotine salts. 20mg/ml",
        price: 4.00,
        img: juice2Img,
        alt: "picture of a vaping juice",
      },

      {
        name: "Strawberry freebase juice",
        id: uuidv4(),
        categoryId: juicesId,
        description: "40ml bottle of strawberry flavored freebase juice. 8mg/ml",
        price: 3.50,
        img: juice3Img,
        alt: "picture of a vaping juice",
      },

      {
        name: "Cherry nicotine salts",
        id: uuidv4(),
        categoryId: juicesId,
        description: "Pack of two 50ml bottle of cherry flavored nicotine salts. 20mg/ml",
        price: 15.00,
        img: juice4Img,
        alt: "picture of a vaping juice",
      },

      {
        name: "Drag 4 box mod",
        id: uuidv4(),
        categoryId: modsId,
        description: "The Drag 4  Box Mod from Voopoo boasts an impressive 177W max power output, customisable UI, and feature-packed Gene.TT 2.0 chipset ",
        price: 46.50,
        img: mod1Img,
        alt: "picture of a vaping mod",
      },

      {
        name: "SMOK Mag-18 mod",
        id: uuidv4(),
        categoryId: modsId,
        description: "A powerhouse 230W sub-ohm DTL vape Mod with multiple power modes, advanced IQ-X chipset, customisable colour screen and 510-connection",
        price: 44.99,
        img: mod2Img,
        alt: "picture of a vaping mod",
      },

      {
        name: "Aegis X mod",
        id: uuidv4(),
        categoryId: modsId,
        description: "Dustproof, waterproof and shockproof, the powerful Aegis X Mod can handle everything life throws at it. With up to 200w of power and a vivid 2.4” TFT screen, the Aegis X Mod provides an unbeatable user experience in a rugged yet ergonomic package",
        price: 50.00,
        img: mod3Img,
        alt: "picture of a vaping mod",
      },

      {
        name: "USB C charger",
        id: uuidv4(),
        categoryId: accessorId,
        description: "USB C cable to charge most of the pod systems and mods",
        price: 8.00,
        img: access1Img,
        alt: "picture of a usb charger",
      },

      {
        name: "Aspire Cleito 120",
        id: uuidv4(),
        categoryId: accessorId,
        description: "Acessorie for Aspire devices. We don't know what it does but maybe you do",
        price: 5.50,
        img: access2Img,
        alt: "picture of a vaping accessorie",
      },

      {
        name: "SMOK Pods",
        id: uuidv4(),
        categoryId: accessorId,
        description: "Empty pods for your SMOK Pod system device with 1.2ohm coils",
        price: 7.50,
        img: access3Img,
        alt: "picture of some empty pods",
      },

      {
        name: "Vaporesso Pod System",
        id: uuidv4(),
        categoryId: PodsysId,
        description: "Pod systen designed for vaporess for a smooth and flavorful smoking, you won't regret it",
        price: 19.50,
        img: pod1Img,
        alt: "picture of a vaping pod system",
      },

      {
        name: "Argus pod system",
        id: uuidv4(),
        categoryId: PodsysId,
        description: "Pod system designed by Argus. We haven't tried it or know of anybody who did but it looks colorful",
        price: 13.99,
        img: pod2Img,
        alt: "picture of a vaping pod system",
      },

      
      {
        name: "Vaporesso Eco Nano",
        id: uuidv4(),
        categoryId: PodsysId,
        description: "The best pod system ever designed. It's like smoking from a disposable but without the pollution or the leaking",
        price: 12.50,
        img: pod3Img,
        alt: "picture of a vaping pod system",
      },
    
]
