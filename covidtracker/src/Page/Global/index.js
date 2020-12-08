import React from 'react';
import Card_global from './Card_global';

const Global = () =>{
    return(
    <div>
    <div className="container mypanel text-center">
    <h1 style={{ fontFamily: "cursive", fontSize: "75px" }}>Covid 19 Cases in the World</h1>
    </div>
        <Card_global/>
    </div>
    )
}

export default Global;