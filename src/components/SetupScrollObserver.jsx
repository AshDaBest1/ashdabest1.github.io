export const setupScrollObserver = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove('active');
              // Get the corresponding nav link by comparing section ID to link's data-target
              if (link.dataset.target === entry.target.id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -50% 0px' // Adjust for header/navbar height
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  };