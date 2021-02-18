import React, { useRef, useState } from "react";

import styles from "./styles.module.scss";

function Filter({
  setFilter,
  info = { all: "00", ended: "00", live: "00", upcoming: "00" },
}) {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef();
  const arrowRef = useRef();
  const toggleArea = () => {
    if (!isOpen) {
      areaRef.current.classList.add(`${styles.open}`);
      areaRef.current.classList.remove(`${styles.closed}`);
      arrowRef.current.classList.add(`${styles.downArrow}`);
      arrowRef.current.classList.remove(`${styles.rightArrow}`);
    } else {
      areaRef.current.classList.add(`${styles.closed}`);
      areaRef.current.classList.remove(`${styles.open}`);
      arrowRef.current.classList.add(`${styles.rightArrow}`);
      arrowRef.current.classList.remove(`${styles.downArrow}`);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={toggleArea}>
        <h1 className={styles.title}>Filters</h1>
        <img
          src="https://image.flaticon.com/icons/svg/60/60758.svg"
          alt="Arrow"
          className={styles.arrow}
          ref={arrowRef}
        />
      </div>
      <div className={styles.content} ref={areaRef}>
        <div
          className={styles.filterOption}
          onClick={() => {
            toggleArea();
            setFilter("all");
          }}
        >
          <h2 className={styles.optionLabel}>All</h2>
          <h3 className={styles.optionMatches}>{info.all}</h3>
        </div>
        <div
          className={styles.filterOption}
          onClick={() => {
            toggleArea();
            setFilter("finished");
          }}
        >
          <h2 className={styles.optionLabel}>Result</h2>
          <h3 className={styles.optionMatches}>{info.ended}</h3>
        </div>
        <div
          className={styles.filterOption}
          onClick={() => {
            toggleArea();
            setFilter("live");
          }}
        >
          <h2 className={styles.optionLabel}>Live</h2>
          <h3 className={styles.optionMatches}>{info.live}</h3>
        </div>
        <div
          className={styles.filterOption}
          onClick={() => {
            toggleArea();
            setFilter("upcoming");
          }}
        >
          <h2 className={styles.optionLabel}>Upcoming</h2>
          <h3 className={styles.optionMatches}>{info.upcoming}</h3>
        </div>
      </div>
    </div>
  );
}

export default Filter;
