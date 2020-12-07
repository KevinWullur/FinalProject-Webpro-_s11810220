import React from 'react'
import CardProvinsi from './CardProvinsi';

const Provinsi = () => {
    return (
        <div>
           <div className="container mypanel text-center">
                <h1 style={{ fontFamily: "serif", fontSize: "60px" }}>Kasus Covid 19 di Provinsi Indonesia</h1>
            </div>
                <CardProvinsi/>
            </div>
    )
}

export default Provinsi;