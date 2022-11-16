import { useState } from "react";
import { data } from "./data";
import { dataTwo } from "./dataTwo";
import imageOne from "./Mounteen.jpg";
import "./App.css";

function App() {
  {
    /* Slides */
  }
  const [foto, setFoto] = useState(0);

  const { image, travel } = data[foto];

  const previousFoto = (i) => {
    setFoto((foto) => {
      foto--;
      if (foto < 0) {
        foto = data.length - 1;
      }
      return foto;
    });
  };

  const nextFoto = () => {
    setFoto((foto) => {
      foto++;
      if (foto > data.length - 1) {
        foto = 0;
      }
      return foto;
    });
  };

  {
    /* Remove countries list */
  }

  const [countries, setCountry] = useState(dataTwo);
  const removeCountry = (id) => {
    let newCountries = countries.filter((country) => country.id !== id);

    setCountry(newCountries);
  };

  return (
    <div>
      <div className="container">
        <div className="box">
          <h1>Live & travel with "Super Voyage"!</h1>
          <h3>The most popular travel agency in Europe. </h3>
        </div>
      </div>

      <div className="containerTwo">
        <div className="quoteBox">
          <h2>
            “Keep your face always toward the sunshine – and shadows will fall
            behind you.”{" "}
          </h2>
          <p className="author">~ Walt Whitman</p>
        </div>
        <img className="foto" src={imageOne} alt="mounteen" />
      </div>

      {/* Slides */}

      <div className="containerDestinations">
        <h4 className="exclusive"> The most exclusive destinations </h4>
        <div>
          <h5>{travel}</h5>
        </div>
        <div className="containerButtons">
          <button className="btnOne" onClick={previousFoto}>
            BACK
          </button>
          <img className="photoDestinations" src={image} alt="foto" />

          <button className="btnTwo" onClick={nextFoto}>
            NEXT
          </button>
        </div>
      </div>

      {/* Remove countries list */}
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
                  {" "}
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
