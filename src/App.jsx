import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import AllBeers from "./pages/AllBeers";
import DisplayBeer from "./pages/DisplayBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  const [beersAPI, setBeersAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers`
    );
    setBeersAPI(response.data);
  };

  useEffect(() => {
    fetchData();
    console.log("refreshed");
  }, [searchTerm]);

  useEffect(() => {
    // console.log(beersAPI)
  }, [beersAPI]);

  return (
    <div className="App">
      <Navbar />
      {!!beersAPI.length && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewBeer />} fetchData={fetchData} />
          <Route path="/random" element={<RandomBeer />} />
          <Route
            path="/all"
            element={
              <AllBeers
                allBeers={beersAPI.filter((beer) => {
                  if (searchTerm === "") {
                    return beer
                  }
                  else if (beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return beer
                } else {
                  return undefined
                }
                })}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route
            path="/beers/:id"
            element={<DisplayBeer allBeers={beersAPI} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
