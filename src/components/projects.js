import React from "react"
import PropTypes from "prop-types"

import "./project-card.css"
import projects from "../data/projects"

const ProjectCard = ({ name, children, labels, url, repo }) => (
  <article className="project-card">
    <div className="project-card__header">
      <h2>{ name }</h2>
      {repo &&
        <a className="navbar-link" href={ `https://github.com/${repo}` } title={repo}>
          <i className="fab fa-github"></i>
        </a>
      }
    </div>
    <a className="project-card__link" href={url}>{ url }</a>
    <p className="project-card__desc">{ children }</p>
    {labels && labels.length > 0 &&
      <div className="project-card__labels">
        {
          labels.map(label => {
            return <span key={label} className="project-card__label">{label}</span>;
          })
        }
      </div>
    }
  </article>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  repo: PropTypes.string,
}

const Projects = () => (
  <section id="projects">
    <h1 className="h1-mega">Projects</h1>
    <ul className="projects-list">
      {projects &&
        projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              name={project.name}
              url={project.url}
              repo={project.repo}
              labels={project.labels}>
              { project.desc }
            </ProjectCard>
          </li>
        ))
      }
    </ul>
  </section>
);

export default Projects
