import React from "react";
import { Link } from "react-router-dom";

function AllBeers({ allBeers, searchTerm, setSearchTerm }) {
  const handleUpdateEvent = async (event) => {
    setSearchTerm(event.target.value);
  };

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
      {allBeers.length > 0 ? (
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
        </div>
      )}
    </div>
  );
}

export default AllBeers;
