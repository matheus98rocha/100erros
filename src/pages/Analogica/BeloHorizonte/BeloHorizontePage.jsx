import React from 'react'
import Header from '../../../components/Header/index'
import ImageSlider from '../../../components/ImagerSlider/ImageSlider';
import { BeloHorizonte } from '../../../data/Analogicas/BeloHorizonte';
import "./beloHorizonte.css"

function BeloHorizontePage() {

    return (
        <div className="bh-page">
            <Header />
            <ImageSlider slides={BeloHorizonte}  data={BeloHorizonte}/>
        </div>
    )
}

export default BeloHorizontePage
