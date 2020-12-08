import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function Card_Indonesia(){
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setConfirmed(response.data.confirmed)
        setRecovered(response.data.recovered)
        setDeaths(response.data.deaths)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);

return (
<div className="container">
  <h1 className="card_a">
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  <p>Positive</p>
  </h1>
  <h1 className="card_b">
  <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
  <p>Death</p>
  </h1>
  <h1 className="card_c">
  <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
  <p>Recovered</p>
  </h1>
</div>
)
}