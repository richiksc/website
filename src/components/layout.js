/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import Header from "./header"
import iconGray from "../images/icon-grayscale.png"
import "./layout.css"
import DarkModeButton from "./DarkModeButton"

import { faAngleDown, faAdjust } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faCodepen,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faAngleDown,
  faGithub,
  faCodepen,
  faTwitter,
  faLinkedin,
  faAdjust,
);

const Layout = ({ headerVisible, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} headerVisible={headerVisible}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <DarkModeButton />
          <main>{children}</main>
          <footer>
            <img src={iconGray} alt="Richik SC Logo" width="60"/>
            <p>&copy; 2021 Richik SC</p>
            <p>Built with ♥ and <a href="https://www.gatsbyjs.org">Gatsby</a></p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerVisible: PropTypes.bool,
}

export default Layout
