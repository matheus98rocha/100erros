import React from 'react'
import Header from '../../components/Header/index'
import "./styles.css"

function NotFound() {
    return (
        <div>
            <Header />
            <div className="content">
                <h1 style={{ color: 'white' }}>Página não encontrada...</h1>
            </div>
        </div>
    )
}

export default NotFound
