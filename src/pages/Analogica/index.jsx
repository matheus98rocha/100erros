import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import { BeloHorizonte } from '../../data/Analogicas/BeloHorizonte';
import { Manifesto } from '../../data/Analogicas/Manifesto';


import './styles.css'

function Index() {

    useEffect(() => {
        document.title = "100erross | Analogica"
    })

    return (
        <div className="analogic-content">
            <Header />
            <h3 className="title-text">Belo Horizonte</h3>
            <div className="image-content">
                {
                    BeloHorizonte.map(e => {
                        return (
                            <img src={e.image} alt="imagens" key={e.name} />
                        )
                    })
                }
            </div>
            <h3 className="title-text">Manifesto</h3>
            
            <div className="image-content">
                {
                    Manifesto.map(e => {
                        return (
                            <img src={e.image} alt="imagens" key={e.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index
