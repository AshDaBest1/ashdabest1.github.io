import React from 'react';

const Portfolio = () => {
  const workSamples = [
    {
      title: "Project 1",
      description: "Brief description of the project and your role",
      category: "Academic/Professional",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Brief description of the project and your role",
      category: "Personal Development",
      link: "#"
    },
    {
      title: "Publication 1",
      description: "Brief description of the publication",
      category: "Research",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2>Portfolio & Work Samples</h2>
      
      <div className="portfolio-grid">
        {workSamples.map((item, index) => (
          <div key={index} className="portfolio-item">
            <h3>{item.title}</h3>
            <p className="category">{item.category}</p>
            <p>{item.description}</p>
            <a href={item.link} className="btn">
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;