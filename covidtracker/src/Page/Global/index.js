import React from 'react';
import CardGlobal from './CardGlobal';

const Global = () =>{
    return(
    <div>
    <div className="container mypanel text-center">
    <h1 style={{ fontFamily: "Serif", fontSize: "60px" }}>Covid 19 Cases in the World</h1>
    </div>
        <CardGlobal/>
    </div>
    )
}

export default Global;