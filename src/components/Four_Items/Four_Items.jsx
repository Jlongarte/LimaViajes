import React, { useState, useEffect } from "react";
import "./Four_iTems.css";
import trips from "../../api/data.js";
import Button from "../Button/Button.jsx";

const FourItems = ({ title }) => {
  // <-- agregamos el prop `title`
  const [randomTrips, setRandomTrips] = useState([]);

  // Función para obtener N elementos aleatorios de un array
  const getRandomTrips = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  useEffect(() => {
    setRandomTrips(getRandomTrips(trips, 4));
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <section className="four_trips">
      {title && <h2 className="four_trips_title">{title}</h2>}{" "}
      {/* <-- agregamos h2 */}
      <ul>
        {randomTrips.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.title} />
            <div className="info">
              <figcaption>{product.title}</figcaption>
              <p>{product.price}</p>
              <div className="buy-option">
                <Button
                  text="See More"
                  link="/products"
                  className="primary"
                  target="_blank"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FourItems;
