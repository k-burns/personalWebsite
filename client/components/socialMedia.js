import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const SocialMedia = props => {
  return (
    <div>
      <h1>Social Media</h1>
      <div className="social-container">
        <div className="social-item">
          <a
            href="https://www.linkedin.com/in/katelynn-burns/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/LI-In-Bug.png" />
          </a>
        </div>
        <div className="social-item">
          <a
            href="https://twitter.com/Katelyn41648210"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/2021-Twitter-logo-blue.png" />
          </a>
        </div>
        <div className="social-item">
          <a
            href="https://katelynnburns655.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Medium-Symbol-Black-RGB@1x.jpg" />
          </a>
        </div>
      </div>
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Katelyn41648210"
          options={{height: 300}}
        />
      </div>
    </div>
  )
}

export default SocialMedia
