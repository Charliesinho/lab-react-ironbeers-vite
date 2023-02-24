import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  const fetchData = async() => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setRandomBeer(response.data);
  }

  useEffect(() => {
    fetchData();   
  }, []);



  return (
    <div style={{color: "black", width: "500px"}}>
      <div>
        <img
          src={`${randomBeer.image_url}`}
          alt=""
          style={{ height: "400px" }}
        />
      </div>

      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{width: "400px", textAlign: "left"}}>
          <h2 style={{fontSize: "23px"}}>{randomBeer.name}</h2>
          <h3 style={{fontWeight: "400", color: "grey"}}>{randomBeer.tagline}</h3>
        </div>
        <div>
          <h2>{randomBeer.attenuation_level}</h2>
          <h3 style={{fontWeight: "400", color: "grey"}}>{randomBeer.first_brewed}</h3>
        </div>
      </div>

      <div>
        <p style={{textAlign: "justify"}}>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default RandomBeer
