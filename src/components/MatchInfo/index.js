import React from "react";

import styles from "./styles.module.scss";

function MatchInfo({ homeTeam, awayTeam, status }) {
  const getMatchTime = () => {
    if (typeof status.bar === "boolean") {
      return "125";
    } else {
      if (typeof status.bar === "string") {
        return "-90";
      } else {
        return "0";
      }
    }
  };

  return (
    <div className={styles.container}>
      <div data-test="componentHomeTeam" className={styles.content}>
        {homeTeam}
      </div>
      <div id="watch" className={styles.content}>
        <svg height="50" width="50">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke={
              typeof status.bar === "string" || typeof status.bar === "number"
                ? "#07E33C"
                : "#eee"
            }
            strokeWidth="1"
            fill="transparent"
            strokeDasharray="251"
            strokeDashoffset={getMatchTime()}
          />
        </svg>
        <h5 className={styles.matchTime}>{status.indication}</h5>
      </div>
      <div data-test="componentAwayTeam" className={styles.content}>
        {awayTeam}
      </div>
    </div>
  );
}

export default MatchInfo;
