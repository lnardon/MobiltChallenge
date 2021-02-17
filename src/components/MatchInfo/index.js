import React from "react";

import styles from "./styles.module.scss";

function MatchInfo({ homeTeam, awayTeam, status }) {
  return (
    <div className={styles.container}>
      <h1>{homeTeam}</h1>
    </div>
  );
}

export default MatchInfo;
