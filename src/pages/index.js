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
          <p>I'm a student at the University of Wisconsin-Madison ('24) studying Computer Science.</p>
          <p>This summer, I'm a Technology Development Program Intern at <a href="https://www.optum.com/">Optum</a>.</p>
          <p style={{ maxWidth: '600px',  marginBottom: `1.45rem` }}>
            Previously, I interned at PTC on the <a href="https://www.ptc.com/en/products/vuforia">Vuforia</a> AR team.
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
