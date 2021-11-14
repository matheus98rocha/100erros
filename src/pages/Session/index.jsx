import React, { useEffect } from 'react'
import Header from '../../components/Header/index';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import './styles.css'

import photo1 from '../../assets/images/sessao/B1B2/1.jpg';
import photo2 from '../../assets/images/sessao/Bronca/1.JPG';



function Index() {

    useEffect(() => {
        document.title = "100erross | Projetos"
    });

    return (
        <div className="analogic-content">
            <Header />

            <Link to="/sessao/b1b2">
                <motion.div
                    className="image-content"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={photo1} alt="" className="analogic-img" />
                    <p className="text">B1B2</p>
                </motion.div>
            </Link>
            <Link to="/sessao/bronca">
                <motion.div
                    className="image-content"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={photo2} alt="" className="analogic-img" />
                    <p className="text1">Material</p>
                </motion.div>
            </Link>

        </div>
    )
}

export default Index
