import React, { useState } from "react";
import "./App.css";
import { Question } from "./Question";

function App() {
  let [questions, setQuestions] = useState([
    { nick: "slavo", text: "Why is React the best?" },
    { nick: "jan", text: "What framework should I use for PHP backend?" },
    { nick: "bob", text: "What is the magic number?" },
  ]);

  let [nickName, setNickName] = useState("");
  let [newQ, setNewQ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQuestions([...questions, { nick: nickName, text: newQ }]);
    setNickName("");
    setNewQ("");
  }

  return (
    <div className="App">
      {questions.map((q, i) => {
        return (
          <Question key={i} nick={questions[i].nick} text={questions[i].text} />
        );
      })}

      <form>
        <label>
          Nickname:
          <input
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </label>
        <label>
          Question:
          <input
            type="text"
            value={newQ}
            onChange={(e) => setNewQ(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
