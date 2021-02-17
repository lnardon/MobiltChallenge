import styles from "./styles.module.scss";
import LiveStatus from "../LiveStatus";
import MatchInfo from "../MatchInfo";

function MatchCard({ info }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.country}>{info.country}</h4>
      <h2 className={styles.competition}>{info.competition}</h2>
      <LiveStatus status={info.liveStatus} />
      <h1 className={styles.score}>
        {info.homeScore.current} - {info.awayScore.current}
      </h1>
      <MatchInfo
        homeTeam={info.homeTeam.name}
        awayTeam={info.awayTeam.name}
        status={info.status.type}
      />
    </div>
  );
}

export default MatchCard;
