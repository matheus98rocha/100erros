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
            <div>
                <h1>Nascido em 05 / 04 / 1999</h1>
            </div>
            <div className="about-cont">
                <h2>
                    Iniciei na fotografia já que gostaria de fazer <br/>
                    um banco de dados no qual eu conseguisse<br/>
                    reunir o máximo de retratos de pessoas situações e locais diferentes.<br/>
                    Para que mesmo na perda da memória<br/>
                    conseguissimos nos lembrar dos momentos vividos
                </h2>

                <motion.div
                    className="image-content"
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={beloHorizonte} alt="beloHorizont" className="img" />
                </motion.div>
            </div>
        </div>
    )
}

export default Index