// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentmatch} = props
  const updatedMatchDetails = {
    result: recentmatch.result,
    id: recentmatch.id,
    competingTeam: recentmatch.competing_team,
    competingTeamLogo: recentmatch.competing_team_logo,
    matchStatus: recentmatch.match_status,
  }
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updatedMatchDetails

  const status = matchStatus === 'Won' ? 'won-status' : 'lost-status'

  return (
    <li className="matchcard-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matchcard-image"
      />
      <p className="matchcard-team">{competingTeam}</p>
      <p className="matchcard-team">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
