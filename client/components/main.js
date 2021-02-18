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
    console.log(team)
    return (
      <div>
        {/* <div>
          Welcome! This site is a work in progress. I am constantly making
          updates, so please come back often. Thank you for coming!
        </div>
        <div>
          This webpage is currently not designed for mobile. A more mobile version
          will be released in the future.
        </div> */}
        {/* <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article9313047.ece/ALTERNATES/s615/JS64312931.jpg" /> */}
        <div>Meet the Team:</div>
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
