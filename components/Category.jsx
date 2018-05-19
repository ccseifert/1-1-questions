import React from "react";
import QuestionCard from "./QuestionCard";
import preload from "../data.json";

const Category = () => (
  <div className="category">
    {preload.questions
      .filter(question => question.categoryid === 3) // TODO: get the category input
      .map(question => <QuestionCard key={question.id} {...question} />)}
  </div>
);

export default Category;
