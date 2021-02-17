import React from "react";

import styles from "./styles.module.scss";

function LiveStatus({ status }) {
  return (
    <div className={styles.container}>
      <h1> {status}</h1>
    </div>
  );
}

export default LiveStatus;
