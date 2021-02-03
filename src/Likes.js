import React, { useState } from "react";

export function Likes() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleClick}>{likes}</button>;
}
