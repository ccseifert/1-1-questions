import React from "react";
import { Link } from "react-router-dom";
// import QuestionCard from "./QuestionCard";
// import preload from "../data.json";

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/random">Random selection</Link>
      </li>
      <li>
        <Link to="/category">View by category</Link>
      </li>
    </ul>
  </div>
);

export default Home;
