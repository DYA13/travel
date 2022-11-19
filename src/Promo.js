import { useState } from "react";
import { dataTwo } from "./dataTwo";
import "./App.css";

function App() {

  const [countries, setCountry] = useState(dataTwo);
  const removeCountry = (id) => {
    let newCountries = countries.filter((country) => country.id !== id);
    setCountry(newCountries);
  };

  return (
    <div>
      <div>
        <div className="block">
          <h1 className="promoTitle">
            Our {countries.length} promotion opportunities
          </h1>

          <button className="promoButton" onClick={() => setCountry([])}>
            I am not intrested in promo{" "}
          </button>
        </div>

        {countries.map((element) => {
          const { id, location, price, photo } = element;
          return (
            <div className="containerPromo" key={id}>
              <img className="promoPhoto" src={photo} alt="country" />

              <div className="boxPromo">
                <h2 className="location">{location}</h2>
                <p className="price">{price}</p>
                <button
                  className="buttonRemove"
                  onClick={() => removeCountry(id)}
                >
               
                  Not interested in this promotion
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default App;
