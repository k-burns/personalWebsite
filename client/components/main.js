import React from 'react'
import SingleTeam from './singleTeam'
import {connect} from 'react-redux'
import {fetchTeam} from '../store/team'

const defaultState = {
  name: '',
  img: '',
  stack: '',
  color: '',
  experience: '',
  hero: '',
  fact: ''
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }
  componentDidMount() {
    this.props.getTeam()
  }
  render() {
    const team = this.props.team || []
    return (
      <div>
        <h2>Meet the Team:</h2>
        <div className="team-members">
          {team.map(member => (
            <SingleTeam
              member={member}
              key={member.name}
              getTeam={this.props.getTeam}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  team: state.team
})

const mapDispatch = dispatch => ({
  getTeam: () => dispatch(fetchTeam())
})

export default connect(mapState, mapDispatch)(Main)
