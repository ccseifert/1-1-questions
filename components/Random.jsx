import React from "react";
import QuestionCard from "./QuestionCard";
import preload from "../data.json";

// 1, define number pf cards per page
const numPerPage = 3;

// 2. get number of total questions
const numQuestions = preload.questions.length;

// 3. random number function
const getRandomNum = () => Math.floor(Math.random() * numQuestions) + 1;

// 4. build random number array with numPerPage elements (but don't repeat)
function buildArray(arr, max) {
  // get new random number
  const randomNumber = getRandomNum();

  // if element is not already in the array, push it on
  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber);
  }

  if (arr.length < max) {
    buildArray(arr, max);
  }

  return arr;
}

const randomArr = buildArray([], numPerPage);

const Random = () => (
  <div>
    {preload.questions
      .filter(question => randomArr.indexOf(question.id) >= 0)
      .map(question => <QuestionCard key={question.id} {...question} random />)}
  </div>
);

export default Random;
