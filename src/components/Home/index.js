import ThemeContext from '../../context/ThemeContext'

import './index.css'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const headStyle = isDarkTheme ? 'home-dark' : 'home-light'
      const bgHome = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      return (
        <>
          <Navbar />
          <div className={`home-cont ${bgHome}`}>
            <img src={img} alt="home" className="home-img" />
            <h1 className={`home-head ${headStyle}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
