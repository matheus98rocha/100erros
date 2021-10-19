import React from 'react'
import Header from '../../components/Header/index'
import ImageSlider from '../../components/ImagerSlider/ImageSlider'
import { SliderData } from '../../data/SliderData'
//import { motion } from "framer-motion"
import "./styles.css"


function Home() {

    return (
        <div className="home">

                <Header />

                <ImageSlider slides={SliderData} />

            {/* Pass the two vídeos here  Formigas*/}

        </div>
    )
}

export default Home

