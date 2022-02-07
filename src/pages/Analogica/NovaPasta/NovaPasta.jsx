import React from 'react'
import Header from '../../../components/Header/index'
import ImageSlider from '../../../components/ImagerSlider/ImageSlider';
import { NovaPastaData } from '../../../data/Analogicas/NovaPastaData';
import "./novaPasta.css"

function NovaPasta() {

    return (
        <div className="bh-page">
            <Header />
            <ImageSlider slides={NovaPastaData}  data={NovaPastaData}/>
        </div>
    )
}

export default NovaPasta
