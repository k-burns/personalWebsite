import React from 'react'

const SingleTeam = props => {
  const {member} = props
  return (
    <div className="team-member">
      <div className="team-pic">
        <img src={member.img} className="profile-pic" alt={member.name} />
      </div>
      <span className="team-info">
        <div className="team-name">{member.name}</div>
        <div className="team-content">
          <div>
            Favorite Library/Technology/Part of the Stack: {member.stack}
          </div>
          <div>Favorite Color: {member.color} </div>
          <div>Experience level: {member.experience} </div>
          <div>Favorite Hero: {member.hero}</div>
          <div>Fun Fact: {member.fact}</div>
        </div>
      </span>
    </div>
  )
}

export default SingleTeam
