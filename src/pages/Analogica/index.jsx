import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import { motion } from 'framer-motion'

import beloHorizonte from '../../assets/images/analogicas/beloHorizonte/1.jpg';
import manifesto from '../../assets/images/analogicas/Manifesto/1_Easy-Resize.com.jpg';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';


import './styles.css'

function Index() {

    useEffect(() => {
        document.title = "100erross | Analogica"
    })

    return (
        <div className="analogic-content">
            <Header />

            {/* <Link to="/analogica/beloHorizonte">
                <motion.div
                    className="image-content"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={beloHorizonte} alt="beloHorizont" className="analogic-img" />
                    <p className="text">Belo Horizonte</p>
                </motion.div>
            </Link>

            <Link to="/analogica/manifesto">
                <motion.div
                    className="image-content"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={manifesto} alt="manifesto" className="analogic-img" />
                    <p className="text1">Manifestação</p>
                </motion.div>
            </Link> */}
            <Card
                title="Manifestação"
                imageUrl={manifesto}
                body="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                destiny="/analogica/manifesto"
            />
        </div>
    )
}

export default Index
