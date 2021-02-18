import React from "react";

import styles from "./styles.module.scss";

function Filter({
  setFilter,
  info = { all: "00", ended: "00", live: "00", upcoming: "00" },
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Filters</h1>
      <div className={styles.filterOption} onClick={() => setFilter("all")}>
        <h2 className={styles.optionLabel}>All</h2>
        <h3 className={styles.optionMatches}>{info.all}</h3>
      </div>
      <div
        className={styles.filterOption}
        onClick={() => setFilter("finished")}
      >
        <h2 className={styles.optionLabel}>Result</h2>
        <h3 className={styles.optionMatches}>{info.ended}</h3>
      </div>
      <div className={styles.filterOption} onClick={() => setFilter("live")}>
        <h2 className={styles.optionLabel}>Live</h2>
        <h3 className={styles.optionMatches}>{info.live}</h3>
      </div>
      <div
        className={styles.filterOption}
        onClick={() => setFilter("upcoming")}
      >
        <h2 className={styles.optionLabel}>Upcoming</h2>
        <h3 className={styles.optionMatches}>{info.upcoming}</h3>
      </div>
    </div>
  );
}

export default Filter;
