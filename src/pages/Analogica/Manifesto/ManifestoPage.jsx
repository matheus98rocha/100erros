import React from 'react'
import Header from '../../../components/Header/index'
import ImageSlider from '../../../components/ImagerSlider/ImageSlider';
import { Manifesto } from '../../../data/Analogicas/Manifesto';

import './styles.css'


function ManifestoPage() {
    return (
        <div>
            <Header />
            <ImageSlider slides={Manifesto}  data={Manifesto}/>
        </div>
    )
}

export default ManifestoPage
