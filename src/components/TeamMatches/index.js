// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamItem: {}, isLoading: true, classname: ''}

  componentDidMount() {
    this.getTeamItemData()
  }

  getTeamItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamItem: updatedData, isLoading: false, classname: id})
  }

  renderTeamItemDetails = () => {
    const {teamItem, classname} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamItem

    return (
      <div className={`team-info card-${classname}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch
          matchdetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="teamMatch-ul-container">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard recentmatch={eachRecentMatch} key={eachRecentMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
