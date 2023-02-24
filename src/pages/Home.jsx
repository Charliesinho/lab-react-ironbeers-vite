import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <Link to={"/all"}>
        <div className="homeDiv">
          <img
            src="/src/assets/beers.png"
            alt=""
            style={{ width: "400px", borderRadius: "15px" }}
          />
          <h2>All Beers</h2>
          <p className="paragraph"> 
            Hello, I am a paragraph, I am here instead of the lorium whatever
            everyone use because I think is weird
          </p>
        </div>
      </Link>

      <Link to={"/random"}>
        <div className="homeDiv">
          <img
            src="/src/assets/random-beer.png"
            alt=""
            style={{ width: "400px", borderRadius: "15px" }}
          />
          <h2>Random Beer</h2>
          <p className="paragraph">
            Hello, I am a paragraph, I am here instead of the lorium whatever
            everyone use because I think is weird
          </p>
        </div>
      </Link>

      <Link to={"/new"}>
        <div className="homeDiv">
          <img
            src="/src/assets/new-beer.png"
            alt=""
            style={{ width: "400px", borderRadius: "15px" }}
          />
          <h2>New Beer</h2>
          <p className="paragraph">
            Hello, I am a paragraph, I am here instead of the lorium whatever
            everyone use because I think is weird
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
