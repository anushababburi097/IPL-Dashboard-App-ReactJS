import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {iplCardData: [], isLoading: true}

  componentDidMount() {
    this.getIplCardData()
  }

  getIplCardData = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    const updatedIplData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      eachTeamImageUrl: each.team_image_url,
    }))
    // console.log(updatedIplData)
    this.setState({iplCardData: updatedIplData, isLoading: false})
    // console.log(updatedIplData)
  }

  renderTeamCardDetails = () => {
    const {iplCardData} = this.state
    return (
      <ul className="team-card-container-list">
        {iplCardData.map(each => (
          <TeamCard iplCardDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="logo-ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="team-card-details-container">
          {isLoading ? this.renderLoader() : this.renderTeamCardDetails()}
        </div>
      </div>
    )
  }
}
export default Home
