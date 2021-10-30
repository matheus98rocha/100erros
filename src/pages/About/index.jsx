import React from 'react'
import Header from '../../components/Header/index'
import { useEffect } from 'react'
import { motion } from 'framer-motion'


import beloHorizonte from '../../assets/images/analogicas/beloHorizonte/1.jpg';

import './styles.css';

function Index() {

    useEffect(() => {
        document.title = "100erross | Sobre"
    })

    return (
        <div className="about">
            <Header />
            <div className="about-cont">
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                    provident explicabo deleniti accusamus ex. Sed
                    facere quis, aperiam deleniti deserunt expedita laboriosam
                    unt aliquid? Iste ratione est illo dolores sit.
                    Lorem ipsum dolor sit <br/>
                    amet consectetur adipisicing elit. Itaque
                    provident explicabo deleniti accusamus ex. Sed
                    facere quis, aperiam deleniti deserunt expedita laboriosam
                    unt aliquid? Iste ratione est illo dolores sit.
                    Lorem ipsum dolor sit
                </h2>

                <motion.div
                    className="image-content"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={beloHorizonte} alt="beloHorizont" className="analogic-img" />
                </motion.div>
            </div>
        </div>
    )
}

export default Index