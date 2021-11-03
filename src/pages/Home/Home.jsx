import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import ImageSlider from '../../components/ImagerSlider/ImageSlider'
import { SliderData } from '../../data/SliderData'
//import { motion } from "framer-motion"
import "./styles.css"


function Home() {
    useEffect(() => {
        document.title = " 100erross | giulio cesare "
    });

    return (
        <div className="home">
            <Header />

            <ImageSlider slides={SliderData} data={SliderData} />


        </div>
    )
}

export default Home

