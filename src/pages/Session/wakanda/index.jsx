import React from 'react'
import Header from '../../../components/Header'

import ImageSlider from '../../../components/ImagerSlider/ImageSlider';

import { wakanda } from '../../../data/session/wakanda';


function index() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <Header />
            <ImageSlider slides={wakanda} data={wakanda} />
        </div>
    )
}

export default index
