import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  border: 2px solid #333;
  border-radius: 6px;
  margin: 25px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 10px grey;
`;

const QuestionCard = props => (
  <Wrapper>
    <div>
      <h2>
        {props.id}. {props.question}
      </h2>
      <div className="center">
        <Link to="#">Replace this card</Link>
      </div>
    </div>
  </Wrapper>
);

QuestionCard.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};

export default QuestionCard;
