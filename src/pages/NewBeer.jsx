import React from "react";
import axios from "axios";
import { useState } from "react";

function NewBeer({ fetchData }) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirsBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
    const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)  
      

    // fetchData();

    setName("")
    setTagline("")
    setDescription("")
    setFirsBrewed("")
    setBrewerTips("")
    setAttenuationLevel(0)
    setContributor("")


  };

  return (
    <div >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Name
          <input
            style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Tagline
          <input
          style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={tagline}
            onChange={(event) => setTagline(event.target.value)}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Description
          <input
          style={{width: "300px", height: "100px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Brewed
          <input
          style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={first_brewed}
            onChange={(event) => setFirsBrewed(event.target.value)}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Brewer Tips
          <input
          style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={brewers_tips}
            onChange={(event) => setBrewerTips(event.target.value)}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Attenuation Level
          <input
          style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="number"
            value={attenuation_level}
            onChange={(event) => setAttenuationLevel(event.target.value)}
            step="10"
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", marginBottom: "20px", textAlign: "left", color: "black", fontWeight: "bold", fontSize: "13px", borderColor: "#d9d9d9"}}>
          Creator
          <input
          style={{width: "300px", height: "30px", borderRadius: "15px", borderStyle: "solid", borderWidth: "1px", padding: "5px", borderColor: "#c7c7c7"}}
            type="text"
            value={contributed_by}
            onChange={(event) => setContributor(event.target.value)}
          />
        </label>
        <button 
        style={{backgroundColor: "#73c5e8", color: "white", borderRadius: "15px"}}
        type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
