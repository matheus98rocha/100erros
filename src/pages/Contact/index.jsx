import React, { useEffect } from 'react'
import Header from '../../components/Header/index'

function Index() {

    useEffect(() => {
        document.title = "100erross | Contato"
    });
    return (
        <div>
            <Header />
            <h1>Contato</h1>
        </div>
    )
}

export default Index;
