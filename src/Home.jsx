import { useState } from 'react'
import Advertising from './components/advertising/Advertising'
import CategoryList from './components/CategoryList/CategoryList'
import styles from './home.module.css'



function Home() {

  return (
    <>
      <CategoryList/>
      <Advertising/>
    </>
  )
}

export default Home
