import React from "react";
import { Link } from "react-router-dom";
import preload from "../data.json";

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/random">Random selection</Link>
      </li>
      {preload.categories.map(category => (
        <li>
          <a href={`/category/${category.id}`}>{category.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
