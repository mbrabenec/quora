import React, {useState} from "react";

export function Likes (props) {

    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
      };

      return (

       <>
            <p>Likes: {likes}</p>
            <button onClick={handleClick}>Like!</button>
       </>

      )


}