import { useState } from "react";
import useData from "./hooks/useData";
import styles from "./App.module.scss";
import MatchCard from "./components/MatchCard";

function App() {
  const data = useData();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [games, setGames] = useState(data);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>App</h1>
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
