import React, { useState } from "react";
import { Likes } from "./Likes";

export function Answer({ ans }) {
  return (
    <div className="answers">
      {ans}
      <Likes />
      {/* <Comments /> */}
    </div>
  );
}
