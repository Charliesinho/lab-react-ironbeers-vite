import React from "react";
import { useParams } from "react-router-dom";

function DisplayBeer({ allBeers }) {
  const beerId = useParams();
  const singleBeer = allBeers.filter((beer) => beer._id === beerId.id)[0];
 

  return (
    <div style={{color: "black", width: "500px"}}>
      <div>
        <img
          src={`${singleBeer.image_url}`}
          alt=""
          style={{ height: "400px" }}
        />
      </div>

      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{width: "400px", textAlign: "left"}}>
          <h2 style={{fontSize: "23px"}}>{singleBeer.name}</h2>
          <h3 style={{fontWeight: "400", color: "grey"}}>{singleBeer.tagline}</h3>
        </div>
        <div>
          <h2>{singleBeer.attenuation_level}</h2>
          <h3 style={{fontWeight: "400", color: "grey"}}>{singleBeer.first_brewed}</h3>
        </div>
      </div>

      <div>
        <p style={{textAlign: "justify"}}>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default DisplayBeer;
