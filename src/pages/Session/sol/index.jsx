import React from 'react'
import Header from '../../../components/Header'

import ImageSlider from '../../../components/ImagerSlider/ImageSlider';

import { sol } from '../../../data/session/sol';


function index() {
    return (
        <div style={{   
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
            }}>
            <Header />
            <ImageSlider slides={sol} data={sol} />
        </div>
    )
}

export default index
