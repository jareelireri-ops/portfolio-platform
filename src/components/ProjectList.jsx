import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <section className="project-list" id="projects">
      <h2>Featured Projects ({projects.length})</h2>
      {projects.length === 0 ? (
        <p className="no-projects">No projects found. Try a different search or add a new project!</p>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;