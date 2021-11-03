import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import { motion } from 'framer-motion'

import beloHorizonte from '../../assets/images/analogicas/beloHorizonte/1.jpg';
import manifesto from '../../assets/images/analogicas/Manifesto/1_Easy-Resize.com.jpg';

import './styles.css'
import { Link } from 'react-router-dom';

function Index() {

    useEffect(() => {
        document.title = "100erross | Analogica"
    })

    return (
        <div className="analogic-content">
            <Header />

            <Link to="/analogica/beloHorizonte">
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
                    <p className="text1">Manifesto</p>
                </motion.div>
            </Link>

        </div>
    )
}

export default Index
