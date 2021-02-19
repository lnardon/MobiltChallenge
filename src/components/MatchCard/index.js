import styles from "./styles.module.scss";
import LiveStatus from "../LiveStatus";
import MatchInfo from "../MatchInfo";

function MatchCard({ info }) {
  const handleData = (data) => {
    switch (data.status.type) {
      case "finished":
        return { indication: "FT", bar: "0" };
      case "notstarted":
        return { indication: "", bar: true, date: data.date };
      case "inprogress":
        return {
          indication: data.liveStatus,
          bar: data.liveStatus,
          liveStatus: data.liveStatus,
        };
      default:
        return "";
    }
  };

  return (
    <div className={styles.container}>
      <h4 data-test="componentCountry" className={styles.country}>
        {info.country}
      </h4>
      <h2 data-test="componentCompetition" className={styles.competition}>
        {info.competition}
      </h2>
      <LiveStatus
        status={info.liveStatus}
        date={info.liveStatus === "-" ? info.date : null}
      />
      <h1 data-test="componentScore" className={styles.score}>
        {info.homeScore.current || "0"} - {info.awayScore.current || "0"}
      </h1>
      <MatchInfo
        homeTeam={info.homeTeam.name}
        awayTeam={info.awayTeam.name}
        status={handleData(info)}
      />
    </div>
  );
}

export default MatchCard;
