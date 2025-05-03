import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: "JavaScript Programming",
      description: "I have applied JavaScript to develop dynamic and interactive web applications, focusing on user-friendly features and responsive design. I built multiple projects that involved DOM manipulation, API integration, and real-time functionality.",
      examples: ["To-do list app", "Frontend Development course", "SKR Development company's application"]
    },
    {
      name: "Node.js and Express.js",
      description: "I have used Node.js and Express.js to create backend servers, manage APIs, and connect web applications to databases. I focused on building RESTful APIs and securing routes for user authentication.",
      examples: ["E-commerce backend system", "Resturant menu generator", "Web development intern at SKR Company"]
    },
    {
      name: "Team Collaboration",
      description: "I have demonstrated strong collaboration skills by working in multi-person teams where communication, task division, and supporting teammates were crucial for completing projects successfully and on time.",
      examples: ["Group web app project during coding bootcamp", "Led a team of 3 in a final project presentation"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <h4>Applied in:</h4>
            <ul>
              {skill.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;