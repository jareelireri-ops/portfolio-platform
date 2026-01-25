import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  // Initial projects data
  const initialProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online shopping platform with cart and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description: "Workout tracking application with progress analytics and social features.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Restaurant Booking System",
      description: "Table reservation platform with real-time availability and notifications.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w-400&h=300&fit=crop",
      link: "#"
    }
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Add new project
  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: projects.length + 1,
      image: newProject.image || "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
    };
    setProjects([...projects, projectWithId]);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h1>Creative Portfolio</h1>
            <p>Showcasing innovative projects and creative solutions</p>
          </section>
          
          <div className="controls-section">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ProjectForm onAddProject={addProject} />
          </div>
          
          <ProjectList projects={filteredProjects} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;