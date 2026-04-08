import "./Grid.css";
import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <section className="offers">
      <h2>Special offers & discounts weekly</h2>

      <div className="grid-container">
        <div className="grid-item">
          <p>9 days 8 nights in Italy</p>
          <p>from</p>
          <span>$7,180</span>
          <Link to="/products" className="btn">
            Browse Destinations
          </Link>
        </div>

        <div className="grid-item">
          <p>Explore Brooklyn</p>
          <p>from</p>
          <span>$4,200</span>
          <Link to="/products" className="btn">
            Browse Destinations
          </Link>
        </div>

        <div className="grid-item">
          <p>Summer in Paris</p>
          <p>from</p>
          <span>$5,550</span>
          <Link to="/products" className="btn">
            Browse Destinations
          </Link>
        </div>
      </div>

      <div className="grid-item large">
        <p>Take the stress out</p>
        <p>Travel to Bahamas from</p>
        <span>$7,180</span>
        <Link to="/products" className="btn">
          Browse Destinations
        </Link>
      </div>
    </section>
  );
};

export default Grid;
