import React from 'react'
import Header from '../../../components/Header'

import ImageSlider from '../../../components/ImagerSlider/ImageSlider';

import { editora } from '../../../data/session/editora.js';


function index() {
    return (
        <div  style={{   
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
            }}>
            <Header/>
            <ImageSlider slides={editora}  data={editora}/>
        </div>
    )
}

export default index
