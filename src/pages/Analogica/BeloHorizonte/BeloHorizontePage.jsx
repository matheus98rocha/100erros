import { motion } from 'framer-motion';
import React from 'react'
import Header from '../../../components/Header/index'
import { BeloHorizonte } from '../../../data/Analogicas/BeloHorizonte';
import "./beloHorizonte.css"

function BeloHorizontePage() {

    return (
        <div className="bh-page">
            <Header />
            <div className="image-contet">
                {
                    BeloHorizonte.map((e, index) => {
                        return (
                            <motion.img
                                id={index}
                                className="img"
                                src={e.image}
                                alt={e.name}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BeloHorizontePage
