import React, { useEffect } from 'react'
import Header from '../../components/Header/index'

function Index() {

    useEffect(() => {
        document.title = "100erross | Analogica"
    })

    return (
        <div>
            <Header />
            <h1>Centro BH</h1>
        </div>
    )
}

export default Index
