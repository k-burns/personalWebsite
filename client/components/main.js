import React from 'react'

const Main = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <div>
        Welcome! This site is a work in progress. I am constantly making
        updates, so please come back often. Thank you for coming!
      </div>
      <div>
        This webpage is currently in not designed for mobile. A more mobile
        version will be released in the future.
      </div>
      <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article9313047.ece/ALTERNATES/s615/JS64312931.jpg" />
    </div>
  )
}

export default Main
