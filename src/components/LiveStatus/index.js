import React from "react";

import styles from "./styles.module.scss";

function LiveStatus({ status }) {
  return (
    <div className={styles.container}>
      <h1
        className={
          status === "FT"
            ? styles.ended
            : status === "Canceled"
            ? styles.canceled
            : styles.live
        }
      >
        {status === "FT"
          ? "ENDED"
          : status === "Canceled"
          ? "CANCELED"
          : "LIVE"}
      </h1>
    </div>
  );
}

export default LiveStatus;
