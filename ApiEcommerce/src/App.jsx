import { useState, useEffect } from "react";
import "./index.css";
// import { Spinner } from "react-bootstrap";
import ImageData from "./ImageData";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getTheFunction = async () => {
      try {
        setLoader(true);
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setProducts(res);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTheFunction();
  }, []);

  const uniqueCategories = [];

  products.forEach((imgObj) => {
    if (!uniqueCategories.includes(imgObj.category)) {
      uniqueCategories.push(imgObj.category);
    }
  });

  // Filter items based on selected category or show all if no category is selected
  const filteredItems = category
    ? products.filter((obj) => obj.category === category)
    : products;

  const images = filteredItems.map((image, index) => (
    <ImageData key={index} imageDetails={image} />
  ));

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <header id="ProductName">
        <h1>Products</h1>
      </header>
      <main>
        <div id="center">
          <select
            id="form-control"
            onChange={categoryHandler}
            name="Product Category"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div id="loader">
          {}
        </div>
        <div className="colors">{images}</div>
      </main>
    </div>
  );
};

export default App;