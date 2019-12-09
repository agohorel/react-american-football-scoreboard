import React from "react";

export const Team = ({ team, name, score }) => {
  return (
    <div className={team}>
      <h2 className={`${team}__name`}>{name}</h2>
      <div className={`${team}__score`}>{score}</div>
    </div>
  );
};
