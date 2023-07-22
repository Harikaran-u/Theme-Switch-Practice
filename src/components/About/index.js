import ThemeContext from '../../context/ThemeContext'

import './index.css'

import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutStyle = isDarkTheme ? 'about-dark' : 'about-light'
      const aboutBg = isDarkTheme ? 'bg-about-dark' : 'bg-about-light'
      return (
        <>
          <Navbar />
          <div className={`about-cont ${aboutBg}`}>
            <img src={aboutImg} alt="about" className="about-img" />
            <h1 className={`about-head ${aboutStyle}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
