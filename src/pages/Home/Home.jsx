import React, { useState } from 'react'
import "./home.css"
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay'
import Appdownlaod from "../../Components/Appdownload/Appdownlaod"
const Home = () => {

const [category, setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownlaod/>
    </div>
  )
}

export default Home
