import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function AllBeers({ allBeers, searchTerm, setSearchTerm, setBeersAPI, fetchData }) {

  const handleUpdateEvent = async (event) => {
    event.preventDefault()
    try {
setSearchTerm(event.target.value);
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`);
    console.log(response.data)
    if (response.data.length > 0) {
      setBeersAPI(response.data)
    } else {
      setBeersAPI([""])
    }
    } catch (err) {
      console.log(err)
    }    
  };

  function showBeers () {
    setSearchTerm("")
    fetchData();
  }

  return (
    <div className="generalAllBeers">
      <form>
        <input
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "40px",
            width: "500px",
            height: "30px",
            padding: "10px",
            borderRadius: "15px",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={handleUpdateEvent}
        />
      </form>
      {allBeers[0] !== "" ? (
        <div>
          {allBeers.map((beer) => {
            return (
              <div>
                <Link to={`/beers/${beer._id}`}>
                  <div className="singleBeer">
                    <div>
                      <img
                        src={`${beer.image_url}`}
                        alt=""
                        style={{ height: "150px" }}
                      />
                    </div>
                    <div className="singleBeerText">
                      <h2>{beer.name}</h2>
                      <h3>{beer.tagline}</h3>
                      <h4>{beer.contributed_by}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>No beer found</p>
          <button 
          style={{backgroundColor: "#73c5e8", color: "white", borderRadius: "15px"}}
          type="text" onClick={showBeers}>Show all Beers</button>
        </div>
      )}
    </div>
  );
}

export default AllBeers;
