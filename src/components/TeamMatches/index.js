// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Cell, Legend} from 'recharts'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const Colors = ['green', 'red', 'blue']

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

  getNumberOfMatches = status => {
    const {teamItem} = this.state
    const {latestMatchDetails, recentMatches} = teamItem
    const match = status === latestMatchDetails.match_status ? 1 : 0
    const matchNumber = recentMatches.filter(
      each => each.match_status === status,
    )
    const numberOfMatches = matchNumber.length + match
    return numberOfMatches
  }

  generateData = () => [
    {name: 'Won', value: this.getNumberOfMatches('Won')},
    {name: 'Lost', value: this.getNumberOfMatches('Lost')},
    {name: 'Draw', value: this.getNumberOfMatches('Draw')},
  ]

  renderTeamItemDetails = () => {
    const {teamItem, classname} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamItem
    const data = this.generateData()

    return (
      <div className={`team-info card-${classname}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch
          matchdetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <h1 className="heading">Statistics</h1>
        <PieChart width={400} height={350}>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((index, i) => (
              <Cell key={`cell-${index}`} fill={Colors[i % Colors.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
        <ul className="teamMatch-ul-container">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard recentmatch={eachRecentMatch} key={eachRecentMatch.id} />
          ))}
        </ul>
        <Link to="/">
          <button type="button" className="back-button">
            Back
          </button>
        </Link>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div data-testid="loader">
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
