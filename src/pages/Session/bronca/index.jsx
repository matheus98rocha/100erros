import React from 'react'
import Header from '../../../components/Header'

import ImageSlider from '../../../components/ImagerSlider/ImageSlider';

import { bronca } from '../../../data/session/bronca';


function index() {
    return (
        <div>
            <Header />
            <ImageSlider slides={bronca} data={bronca} />
        </div>
    )
}

export default index
