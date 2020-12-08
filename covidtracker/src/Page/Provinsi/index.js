import React from 'react'
import Card_Provinsi from './Card_Provinsi';

const Provinsi = () => {
    return (
        <div>
           <div className="container mypanel text-center">
                <h1 style={{ fontFamily: "cursive", fontSize: "75px" }}>Kasus Covid 19 di Provinsi Indonesia</h1>
            </div>
                <Card_Provinsi/>
            </div>
    )
}

export default Provinsi;