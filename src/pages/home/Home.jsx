import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisply from '../../components/FoodDisply'

const Home = () => {
  const [category , setcategory] = useState("ALL")
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisply category={category}/>
    </div>
  )
}

export default Home;