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
    this.handleScroll = this.handleScroll.bind(this)
  }
  async componentDidMount() {
    await this.props.getTeam()
    document.querySelector('.team-member').classList.add('team-animation')
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const teamContainer = entry.target.querySelector('.team-member')
        if (entry.isIntersecting) {
          teamContainer.classList.add('team-animation')
          return
        }
        teamContainer.classList.remove('team-animation')
      })
    })
    const classes = document.querySelectorAll('.team-wrapper')
    classes.forEach(list => {
      observer.observe(list)
    })
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
