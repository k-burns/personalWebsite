import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const SocialMedia = props => {
  return (
    <div>
      <h1>Social Media</h1>
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Katelyn41648210"
          options={{height: 300}}
        />
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/katelynn-burns/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../../public/LI-In-Bug.png" />
        </a>
      </div>
      <div>
        <a href="https://katelynnburns655.medium.com/" target="_blank">
          Medium
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
