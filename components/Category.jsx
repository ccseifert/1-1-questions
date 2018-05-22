import React from "react";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";
import preload from "../data.json";

class Category extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryid: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.categoryid = Number(props.match.params.categoryid);
    this.categoryName = preload.categories
      .filter(category => category.id === this.categoryid)
      .map(category => category.name);
  }

  render() {
    return (
      <div className="category">
        <h2>{this.categoryName}</h2>
        {preload.questions
          .filter(question => question.categoryid === this.categoryid) // TODO: get the category input
          .map(question => (
            <QuestionCard key={question.id} {...question} random={false} />
          ))}
      </div>
    );
  }
}

export default Category;
