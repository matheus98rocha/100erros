import React from 'react'
import Header from '../../components/Header/index'
import { useEffect } from 'react'

function Index() {

    useEffect(() => {
        document.title = "100erross | Sobre"
    })

    return (
        <div>
            <Header />
            <h1>Sobre</h1>
        </div>
    )
}

export default Index