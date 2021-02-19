import React from "react";

import styles from "./styles.module.scss";

function LiveStatus({ status, date }) {
  const getStatus = () => {
    switch (status) {
      case "FT":
        return "ENDED";
      case "HT":
        return "LIVE";
      case "Canceled":
        return "CANCELED";
      default:
        return "LIVE";
    }
  };
  return (
    <div className={styles.container}>
      <h1
        data-test="componentStatus"
        className={
          status === "FT"
            ? styles.ended
            : status === "Canceled"
            ? styles.canceled
            : styles.live
        }
      >
        {date ? date : getStatus()}
      </h1>
    </div>
  );
}

export default LiveStatus;
