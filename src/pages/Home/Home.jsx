import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import "./styles.css"
import giff from '../../assets/images/home/giphy.gif'


function Home() {
    useEffect(() => {
        document.title = " 100erross | giulio cesare "
    });

    return (
        <div className="home">
            <Header />
            <h1>Giulio Cesare</h1>
            <img src={giff} alt="giff-home" className="gif-home"/>
        </div>
    )
}

export default Home

