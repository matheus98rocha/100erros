import React from 'react'
import Header from '../../components/Header/index'
import { BeloHorizonte } from '../../data/Analogicas/BeloHorizonte';

function BeloHorizontePage() {
    return (
        <div>
             <Header />
             <div className="image-contet">
                 {
                     BeloHorizonte.map(e =>{
                         return(
                             <img src={e.image} alt={e.name} />
                         )
                     })
                 }
             </div>
        </div>
    )
}

export default BeloHorizontePage
