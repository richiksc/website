import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

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
          <p>I'm a student, full stack developer, and graphic designer.</p>
          <p>I work with modern open-source tools such as Git, Java, Node, Spring, and Vue.</p>
          <p style={{ maxWidth: '600px',  marginBottom: `1.45rem` }}>
            I'm also a member of a{` `}
            <a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a>{` `}
            team, where we have six weeks to design, build, and program robots that compete in annual challenges.
          </p>
          <a href="#projects" className="cta">
            View my projects <i className="fas fa-angle-down" />
          </a>
        </section>
        <Projects/>
      </Layout>
    );
  }
}

export default IndexPage
