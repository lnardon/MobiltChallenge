import styles from "./styles.module.scss";
import LiveStatus from "../LiveStatus";
import MatchInfo from "../MatchInfo";

function MatchCard({ info }) {
  return (
    <div className={styles.container}>
      <h4 data-test="componentCountry" className={styles.country}>
        {info.country}
      </h4>
      <h2 data-test="componentCompetition" className={styles.competition}>
        {info.competition}
      </h2>
      <LiveStatus status={info.liveStatus} />
      <h1 data-test="componentScore" className={styles.score}>
        {info.homeScore.current} - {info.awayScore.current}
      </h1>
      <MatchInfo
        homeTeam={info.homeTeam.name}
        awayTeam={info.awayTeam.name}
        status={info.status}
      />
    </div>
  );
}

export default MatchCard;
