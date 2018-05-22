import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

class QuestionCard extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    random: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.id = props.id;
    this.question = props.question;
    this.random = props.random;
  }

  render() {
    const Wrapper = styled.div`
      width: 80%;
      border: 2px solid #333;
      border-radius: 6px;
      margin: 25px;
      padding: 10px;
      overflow: hidden;
      box-shadow: 5px 5px 10px grey;
    `;

    // TODO: add onClick action to replace card
    const replaceLink =
      this.random === true ? <Link to="#">Replace this card</Link> : "";

    return (
      <Wrapper>
        <div>
          <h2>
            {this.id}. {this.question}
          </h2>
          <div className="center">{replaceLink}</div>
        </div>
      </Wrapper>
    );
  }
}

export default QuestionCard;
