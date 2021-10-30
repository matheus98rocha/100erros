import React from 'react'
import Header from '../../../components/Header/index'

import { Manifesto } from '../../../data/Analogicas/Manifesto';

import './styles.css'


function ManifestoPage() {
    return (
        <div>
            <Header />
            <div className="image-contet">
                {
                    Manifesto.map((e, index) => {
                        return (
                            <img
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

export default ManifestoPage
