function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Creative Portfolio. All projects are fictional for demonstration purposes.</p>
        <p>Built with React • Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}

export default Footer;