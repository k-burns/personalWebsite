import React, {useEffect, useState} from 'react'

const About = props => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderDetails = () => (
    <div className="about-details">
      <div className="about-wrapper">
        <div className="about-container">
          <h2 className="background-header">Background</h2>
          <p>
            I am a software engineer with a background in Psychology and
            education. I have always loved learning about how things work,
            including the structures of the brain. Psychology helped teach me to
            be patient and to remember that everyone has their own story. I used
            this knowledge to help me as the lead teacher at a childcare and
            later as a live-in nanny.
          </p>
        </div>
      </div>
      <div className="about-wrapper">
        <p className="about-container">
          I have been interested in coding since high school when I took a
          college level computers course and created a basic website. I was
          excited to get to create and learn basic coding, but being from a
          small town I didn't have the opportunity at the time to pursue more
          software engineering knowledge. I later moved to NYC and became a
          nanny. After moving to NYC I began to make friends who worked in
          different branches of the coding industry. I started to learn coding
          again and to create simple apps with them in my free time. The family
          I was nannying for moved and it felt like the perfect time for a new
          start to pursue software engineering. I attended the Grace Hopper
          program and Fullstack Academy. Since then I have been working on
          personal projects, studying algorithms, and looking for a team to
          continue the next step of my software engineering journey with.{' '}
        </p>
      </div>
      <div className="about-wrapper">
        <div className="about-container">
          <h2>Why I love Software Engineering</h2>
          <ul>It's combination of creativity and logical thinking</ul>
          <ul>Having the ability to solve real world problems</ul>
          <ul>
            There are so many languages, technologies, and libraries to learn
          </ul>
          <ul />
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-container">
          <h2>Hobbies</h2>
          <div className="hobbies">
            <li>Playing RPGs</li>
            <li>Reading</li>
            <li>Drawing</li>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <section className="about">
      <div
        className="about-background"
        style={{transform: `translateY(${offsetY * 0.5}px)`}}
      />
      <div
        className="about-shapes"
        style={{transform: `translateY(${offsetY * 0.8}px)`}}
      />
      <div className="about-contents">{renderDetails()}</div>
    </section>
  )
}

export default About
