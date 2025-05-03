const Navbar = () => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = document.querySelector('.app-header').offsetHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = headerHeight + navbarHeight;
        
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    };
  
    return (
      <nav className="navbar">
        <ul className="nav-links">
          {[
            { id: "about", name: "About" },
            { id: "skills", name: "Skills" },
            { id: "education", name: "Education" },
            { id: "experience", name: "Experience" },
            { id: "professional-development", name: "Professional" },
            { id: "wrn-virtual", name: "WRN" },
            { id: "documents", name: "Documents" },
            { id: "portfolio", name: "Portfolio" },
            { id: "contact", name: "Contact" }
          ].map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                data-target={item.id}
              >
                <span className="nav-text">{item.name}</span>
                <span className="nav-dot"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Navbar