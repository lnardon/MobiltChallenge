import React from "react";

import styles from "./styles.module.scss";

function MatchInfo({ homeTeam, awayTeam, status }) {
  return (
    <div className={styles.container}>
      <div data-test="componentHomeTeam" className={styles.content}>
        {homeTeam}
      </div>
      <div className={styles.content}>
        <div>{status.type}</div>
      </div>
      <div data-test="componentAwayTeam" className={styles.content}>
        {awayTeam}
      </div>
    </div>
  );
}

export default MatchInfo;
