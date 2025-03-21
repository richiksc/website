import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import IconLink from "../components/IconLink";
import icon from "../images/icon-grayscale.png";

class Header extends React.Component {
  static propTypes = {
    siteTitle: PropTypes.string,
    headerVisible: PropTypes.bool,
  };

  static defaultProps = {
    siteTitle: ``,
    headerVisible: true,
  };

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
          backgroundColor:
            "color-mix(in srgb, var(--background-color) 80%, transparent)",
          backdropFilter: "blur(40px)",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.5rem 1.0875rem`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h1
            style={{ margin: 0 }}
            className={headerVisible ? "" : "invisible"}
          >
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: `none`,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={icon}
                alt="Richik SC Logo"
                style={{
                  maxHeight: "1.5em",
                  marginRight: "0.5em",
                  borderRadius: "0.125em",
                  filter: "invert(100%)",
                }}
              />
              {siteTitle}
            </Link>
          </h1>
          <div style={{ flexGrow: 1 }}></div>
          <div className="social-links">
            <IconLink
              label="GitHub"
              href="https://github.com/richiksc"
              icon={["fab", "github"]}
            />
            <IconLink
              label="CodePen"
              href="https://codepen.io/richiksc"
              icon={["fab", "codepen"]}
            />
            <IconLink
              label="Twitter"
              href="https://twitter.com/richiksc"
              icon={["fab", "twitter"]}
            />
            <IconLink
              label="LinkedIn"
              href="https://linkedin.com/in/richiksc"
              icon={["fab", "linkedin"]}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
