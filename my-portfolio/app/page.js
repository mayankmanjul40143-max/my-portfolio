// app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      
      {/* Header and Navigation */}
      <header className="header">
        <div className="container">
          <Link href="/" className="logo">
            <h1>My Portfolio</h1>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <h1>Hello, I'm <span style={{ color: 'var(--accent-color)' }}>Manjul Mayank Shukla</span></h1>
          <p>A passionate web developer building modern and responsive applications.</p>
          <Link href="#projects" className="cta-button">View My Work</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hii, I'm Manjul Mayank Shukla, a web developer with a passion for creating dynamic and responsive web applications. I specialize in using modern technologies like Next.js, React, and Tailwind CSS to build user-friendly interfaces. My goal is to deliver high-quality code and exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            
            {/* Project Card 1 */}
            <div className="project-card">
              <h3>Dynamin Pricing System</h3>
              <p>Description of your first project. Explain its purpose and technologies used.</p>
              <div className="tags">
                <span className="tag">Java Spring Boot</span>
                <span className="tag">CSS</span>
                <span className="tag">HTML</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <h3>Online Course Management System</h3>
              <p>Description of your second project. Be specific about its features.</p>
              <div className="tags">
                <span className="tag">Java Spring Boot</span>
                <span className="tag">API</span>
                <span className="tag">HTML/CSS</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <h3>Basic Calculator</h3>
              <p>Description of your third project.</p>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm currently looking for new opportunities. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:mayankmanjul40143@gmail.com" className="contact-button">Email Me</a>
            <a href="https://github.com/mayankmanjul40143-max" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()}  Manjul Mayank, All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}