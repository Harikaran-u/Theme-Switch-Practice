import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navBg = isDarkTheme ? 'bg-dark-nav' : 'bg-light-nav'
      const linkBg = isDarkTheme ? 'nav-link-bg-dark' : 'nav-link-bg-light'
      const linkStyle = isDarkTheme ? 'link-dark' : 'link-light'
      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`nav-bar ${navBg}`}>
          <ul className={`nav-items ${linkBg}`}>
            <img src={logoImg} alt="website logo" className="web-logo" />
            <div className="nav-link-cont">
              <Link to="/" className="link-style">
                <li className={`nav-route-links ${linkStyle}`}>Home</li>
              </Link>

              <Link to="/about" className="link-style">
                <li className={`nav-route-links ${linkStyle}`}>About</li>
              </Link>
            </div>
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img src={themeImg} alt="theme" className="theme-logo" />
            </button>
          </ul>
          <hr size="3" className="hr-line" />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
