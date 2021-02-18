import { useState, useEffect } from "react";
import useData from "./hooks/useData";

import styles from "./App.module.scss";
import MatchCard from "./components/MatchCard";
import Filter from "./components/Filter";
import ball from "./assets/ball.svg";

function App() {
  const data = useData();
  const [gamesAmount, setGamesAmount] = useState({});
  const [games, setGames] = useState(data);

  useEffect(() => {
    let info = {
      all: data.length,
      ended: countVideo("finished"),
      live: countVideo("inprogress"),
      upcoming: countVideo("notstarted"),
    };
    setGamesAmount(info);
  }, []);

  const applyFilter = (type) => {
    console.log(data);
    switch (type) {
      case "all":
        setGames(data);
        break;
      case "finished":
        setGames(
          data.filter((game) => {
            if (game.status.type === "finished") {
              return game;
            }
          })
        );
        break;
      case "live":
        setGames(
          data.filter((game) => {
            if (game.status.type === "inprogress") {
              return game;
            }
          })
        );
        break;
      case "upcoming":
        setGames(
          data.filter((game) => {
            if (game.status.type === "notstarted") {
              return game;
            }
          })
        );
        break;
      default:
        break;
    }
  };

  const countVideo = (type) => {
    let aux = data.filter((game) => {
      if (game.status.type === type) {
        return game;
      }
    });
    return aux.length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <img src={ball} alt="logo" className={styles.logo} />
          <h1 style={{ fontSize: "3rem" }}>Live Score</h1>
          <img src={ball} alt="logo" className={styles.logo} />
        </div>

        <Filter setFilter={applyFilter} info={gamesAmount} />
        <div className={styles.matchesList}>
          {games.map((game) => (
            <MatchCard key={game.id} info={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
