import React from "react";

import styles from "./styles.module.scss";

function MatchInfo({ homeTeam, awayTeam, status }) {
  const getMatchProgress = () => {
    if (typeof status.bar === "boolean" || typeof status.bar === "undefined") {
      return 126;
    } else if (status.bar === "HT" || status.bar === "45+") {
      return 63;
    } else if (status.bar === "0") {
      return 0;
    } else {
      return ((status.bar - 90) / (0 - 90)) * (126 - 0) + 0;
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
            stroke="#eee"
            strokeWidth="1"
            fill="transparent"
            strokeDasharray="0"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke={"#07e33c"}
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="126"
            strokeDashoffset={getMatchProgress()}
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
