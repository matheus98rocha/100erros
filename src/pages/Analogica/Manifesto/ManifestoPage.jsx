import React from 'react'
import Header from '../../../components/Header/index'
import ImageSlider from '../../../components/ImagerSlider/ImageSlider';
import { Manifesto } from '../../../data/Analogicas/Manifesto';

import './styles.css'


function ManifestoPage() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <Header />
            <ImageSlider slides={Manifesto} data={Manifesto} />
        </div>
    )
}

export default ManifestoPage
