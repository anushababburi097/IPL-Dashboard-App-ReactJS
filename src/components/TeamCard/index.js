import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplCardDetails} = props
  const {id, eachTeamImageUrl, name} = iplCardDetails
  return (
    <li className="list-team-card">
      <Link to={`/team-matches/${id}`} className="list-link">
        <div className="card-details">
          <img src={eachTeamImageUrl} alt={name} className="image" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
