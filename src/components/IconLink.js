import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconLink = ({ label, icon, href, small, className, title, ...props }) => (
  <a
    className={
      'icon-link'
        .concat(className ? ` ${className}` : '')
        .concat(small ? ' small' : '')
    }
    title={title || label}
    aria-label={label}
    href={href}
    {...props}>
    <FontAwesomeIcon icon={icon} />
  </a>
)

IconLink.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      icon: PropTypes.string,
    }),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
  small: PropTypes.bool,
  className: PropTypes.string
}

export default IconLink
