import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerVisible: false,
    };
  }

  handleScroll = () => {
    const lastKnownScrollPos = window.scrollY;
    requestAnimationFrame(() => {
      this.setState({
        headerVisible: lastKnownScrollPos > 100,
      });
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Layout headerVisible={this.state.headerVisible}>
        <SEO keywords={[`richik`, `richik sc`]} />
        <section>
          <h1 className="h1-mega">Hi, I'm Richik.</h1>
          <p>I'm a software engineer and graduate student at Northeastern University. I graduated with my bachelor's degree in Computer Science from the University of Wisconsin-Madison in 2024.</p>
          <p>Formerly, I was a Technology Development Program Intern at <a href="https://www.optum.com/">Optum</a>, working on SRE and cloud engineering.</p>
          <p>
            Prior to that, I interned at PTC on the <a href="https://www.ptc.com/en/products/vuforia">Vuforia</a> AR team.
          </p>
          <p style={{ maxWidth: '600px',  marginBottom: `1.45rem` }}>
            I was also a teaching assistant for the undergrad Operating Systems course at both UW-Madison and Northeastern.
          </p>
          <a href="#projects" className="cta">
            View my projects <FontAwesomeIcon icon="angle-down"/>
          </a>
        </section>
        <Projects/>
      </Layout>
    );
  }
}

export default IndexPage
