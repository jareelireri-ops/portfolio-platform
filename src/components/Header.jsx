function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Creative<span>Portfolio</span></h1>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#add">Add Project</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;