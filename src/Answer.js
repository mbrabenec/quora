import React, { useState } from "react";
import { Likes } from "./Likes";

export function Answer(props) {
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setComment(input);
    setInput("");
  }

  return (
    <div>
      <p>{props.answer}</p>
      <Likes />

      {comment === "" ? <p>No comments yet</p> : <p>{comment}</p>}

      <form>
        <label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Comment
          </button>
        </label>
      </form>
    </div>
  );
}
