// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, id, teamImageUrl} = team
  return (
    <Link to={`/team-matches/${id}`} className="teamcard-container">
      <li className="teamcard-li-container">
        <img src={teamImageUrl} alt={`${name}`} className="image-teamcard" />
        <p className="teamcard-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
