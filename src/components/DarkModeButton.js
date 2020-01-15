import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class DarkModeButton extends React.Component {

  constructor() {
    super();
    this.state = {
      isDark: false,
    };
    this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleMediaQueryChange(e) {
    this.setState({ isDark: e.matches });
  }

  handleButtonClick() {
    this.setState({ isDark: !this.state.isDark });
  }

  componentDidMount() {
    console.log("DarkModeButton mount");
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.setState({
      isDark: this.mediaQuery.matches || false,
    });
    this.mediaQuery.addListener(this.handleMediaQueryChange);
  }

  componentWillUnmount() {
    this.mediaQuery.removeListener(this.handleMediaQueryChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDark !== this.state.isDark) {
      if (this.state.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  render() {
    return (
      <button
        className='action-button'
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 1,
          border: '2px solid var(--background-color)'
        }}
        onClick={this.handleButtonClick}
        title='Toggle dark/light mode'
        >
          <FontAwesomeIcon
            icon='adjust'
            style={{
              transform: `rotate(${ this.state.isDark ? '180deg' : '0deg' })`,
              transition: 'transform 150ms ease-in',
            }}
            />
          { `${this.state.isDark ? 'Light' : 'Dark' } mode` }
      </button>
    );
  }
}
