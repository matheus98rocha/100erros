import React from 'react'
import Header from '../../../components/Header'

import ImageSlider from '../../../components/ImagerSlider/ImageSlider';

import { iza } from '../../../data/session/iza';


function index() {
    return (
        <div style={{   
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
            }}>
            <Header />
            <ImageSlider slides={iza} data={iza} />
        </div>
    )
}

export default index
