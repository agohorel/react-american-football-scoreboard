//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { Team } from "./Team";

function App() {
  const [homeScore, updateHomeScore] = useState(0);
  const [awayScore, updateAwayScore] = useState(0);
  const [ellapsed, updateEllapsed] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      updateEllapsed(ellapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [ellapsed]);


  const updateScore = (team, amount) => {
    switch (team) {
      case "home":
        updateHomeScore(homeScore + amount);
        break;
      case "away":
        updateAwayScore(awayScore + amount);
        break;
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Team team="home" name="Lions" score={homeScore}></Team>
          <div className="timer">{ellapsed}</div>
          <Team team="away" name="Tigers" score={awayScore}></Team>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => updateScore("home", 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => updateScore("home", 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => updateScore("away", 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => updateScore("away", 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
