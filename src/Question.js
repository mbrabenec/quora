import React, { useState } from "react";
import { Answer } from "./Answer";

export function Question({ nick, text }) {
  let [answers, setAnswers] = useState([
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    "Ullam sunt distinctio cum saepe quam tenetur delectus mollitia possimus minima ab",
    "Odit molestias modi, consequuntur facere suscipit eos",
    "Ipsam, fugit tempore?",
  ]);

  let [newAnswer, setNewAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAnswers([...answers, newAnswer]);
    setNewAnswer("");
  }

  return (
    <>
      <div className="question">
        <h5 className="question__nick">{nick}</h5>
        <h3 className="question__title">{text}</h3>
      </div>

      {answers.map((q, i) => {
        return <Answer key={i} ans={answers[i]} />;
      })}

      <form>
        <label>
          Answer:
          <input
            type="text"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </>
  );
}
