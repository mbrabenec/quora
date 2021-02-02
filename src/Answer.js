import React, {useState} from "react";
import {Likes} from './Likes'

export function Answer(props) {

    return (
        <>
            <p>{props.answer}</p>
            <Likes/>
        </>

    )

}



