import { useState } from "react";
import trips from "../../api/data.js";
import Button from "../../components/Button/Button.jsx";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState(trips);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrado por búsqueda
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTrips = trips.filter((trip) =>
      trip.title.toLowerCase().includes(query),
    );
    setProducts(filteredTrips);
  };

  // Filtrado por categoría
  const handleCategoryClick = (category) => {
    const filteredTrips =
      category === "All"
        ? trips
        : trips.filter((trip) => trip.category === category);
    setProducts(filteredTrips);
  };

  // Comprar producto
  const handleBuy = (product) => {
    localStorage.setItem("selectedTrip", JSON.stringify(product));
    window.location.href = "/CardProducts"; // Manteniendo tu redirección
  };

  return (
    <div>
      <div id="search-bar">
        <input
          type="search"
          id="SearchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button id="SearchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div id="categories">
        {["City", "Adventure", "Beach", "Offers"].map((category) => (
          <button
            key={category}
            className="category"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul id="shop-products">
        {products.length === 0 ? (
          <div id="no-products-message">
            No products found in this category.
          </div>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <figcaption>{product.title}</figcaption>
              <p>{product.price}</p>
              <div className="buy-option">
                <Button text="Buy Now" link="/" target="_blank" />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Products;
