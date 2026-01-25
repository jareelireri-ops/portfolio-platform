import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    link: '#'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
    };
    onAddProject(newProject);
    // Reset form
    setFormData({
      title: '',
      description: '',
      technologies: '',
      image: '',
      link: '#'
    });
    alert('Project added successfully!');
  };

  return (
    <section className="project-form" id="add">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter project title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Describe your project"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="technologies">Technologies (comma separated) *</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            required
            placeholder="React, Node.js, MongoDB"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image URL (optional)</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;