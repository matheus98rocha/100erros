import React,{useEffect} from 'react'
import Header from '../../components/Header/index'

function Index() {

    useEffect(() => {
        document.title = "100erross | Designer"
    });

    return (
        <div>
            <Header />
            <h1>Designer</h1>
        </div>
    )
}

export default Index
