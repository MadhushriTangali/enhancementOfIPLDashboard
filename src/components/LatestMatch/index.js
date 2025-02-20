// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchdetails} = props
  const updatedDetails = {
    umpires: matchdetails.umpires,
    result: matchdetails.result,
    manOfTheMatch: matchdetails.man_of_the_match,
    id: matchdetails.id,
    date: matchdetails.date,
    venue: matchdetails.venue,
    competingTeam: matchdetails.competing_team,
    competingTeamLogo: matchdetails.competing_team_logo,
    firstInnings: matchdetails.first_innings,
    secondInnings: matchdetails.second_innings,
    matchStatus: matchdetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedDetails
  return (
    <div className="outer-container">
      <div className="team-details-container">
        <p className="team-name">{competingTeam}</p>
        <p className="team-name">{date}</p>
        <p className="team-name">{venue}</p>
        <p className="team-name">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-image"
      />
      <div className="innings-container">
        <h1 className="heading-innings">First Innings</h1>
        <p className="para-innings">{firstInnings}</p>
        <h1 className="heading-innings">Second Innings</h1>
        <p className="para-innings">{secondInnings}</p>
        <h1 className="heading-innings">Man Of The Match</h1>
        <p className="para-innings">{manOfTheMatch}</p>
        <h1 className="heading-innings">Umpires</h1>
        <p className="para-innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
