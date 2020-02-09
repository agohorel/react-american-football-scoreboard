//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { Team } from "./Team";

function App() {
  const [homeScore, updateHomeScore] = useState(0);
  const [awayScore, updateAwayScore] = useState(0);
  const [ellapsed, updateEllapsed] = useState(0);
  const [ellapsedDisplay, updateEllapsedDisplay] = useState(
    new Date(ellapsed * 1000).toISOString().substr(14, 5)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      updateEllapsed(ellapsed + 1);
      updateEllapsedDisplay(
        new Date(ellapsed * 1000).toISOString().substr(14, 5)
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [ellapsed, ellapsedDisplay]);

  const updateScore = (team, amount) => {
    switch (team) {
      case "home":
        updateHomeScore(homeScore + amount);
        break;
      case "away":
        updateAwayScore(awayScore + amount);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Team team="home" name="Lions" score={homeScore}></Team>
          <div className="timer">{ellapsedDisplay}</div>
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
