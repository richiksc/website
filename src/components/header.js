import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import icon from "../images/icon-96.png"

class Header extends React.Component {

  static propTypes = {
    siteTitle: PropTypes.string,
    headerVisible: PropTypes.bool,
  }

  static defaultProps = {
    siteTitle: ``,
    headerVisible: true,
  }

  constructor(props) {
    super(props);
    this.siteTitle = props.siteTitle;
  }

  render() {
    const headerVisible = this.props.headerVisible;
    const siteTitle = this.props.siteTitle;
    return (
      <header
      style={{
        marginBottom: `1.45rem`,
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}>
        <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <h1 style={{ margin: 0 }} className={headerVisible ? '' : 'invisible'}>
            <Link
            to="/"
            style={{
              color: 'inherit',
              textDecoration: `none`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <img src={icon} alt="Richik SC Logo" style={{
              maxHeight: '1.5em',
              marginRight: '0.5em',
              borderRadius: '0.125em',
            }}/>
            {siteTitle}
            </Link>
          </h1>
          <div style={{ flexGrow: 1 }}></div>
          <div className="social-links">
            <a className="navbar-link" href="https://github.com/richiksc">
              <i className="fab fa-github" />
            </a>
            <a className="navbar-link" href="https:/codepen.io/richiksc">
              <i className="fab fa-codepen" />
            </a>
            <a className="navbar-link" href="https://twitter.com/richiksc">
              <i className="fab fa-twitter" />
            </a>
            <a className="navbar-link" href="https://linkedin.com/in/richiksc">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
