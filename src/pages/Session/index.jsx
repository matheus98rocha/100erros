import React, { useEffect } from 'react'
import Header from '../../components/Header/index'

function Index() {

    useEffect(() => {
        document.title = "100erross | Projetos"
    });

    return (
        <div>
            <Header />
        </div>
    )
}

export default Index
