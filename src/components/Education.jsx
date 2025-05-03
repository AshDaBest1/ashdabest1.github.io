import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      institution: "Beirut Arab University",
      degree: "Bachlor in Computer Science",
      year: "2025",
      description: "I am currently pursuing my degree at Beirut Arab University. My coursework focuses on Web Development, Cybersecuirty for web apps, Web servers managment. Through my studies, I have gained strong skills in frontend/backend development, databases, problem solving and team collabration, preparing me for future career opportunities. I am committed to academic excellence and continuous learning.",
      // honors: ["Honor Society", "Dean's List", "Scholarships"]
    },
    {
      institution: "Amqa High School",
      degree: "Diploma in Economics and Sociology",
      year: "2022",
      description: "Graduated with a focus on economic and social sciences. Developed strong analytical and critical thinking skills through coursework in economics, history, and social studies."
    }
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      
      <div className="education-timeline">
        {educationHistory.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.institution}</h3>
              <span className="education-year">{edu.year}</span>
            </div>
            <h4>{edu.degree}</h4>
            <p>{edu.description}</p>
            
            {/* {edu.honors && edu.honors.length > 0 && (
              <div className="education-honors">
                <h5>Honors & Awards:</h5>
                <ul>
                  {edu.honors.map((honor, i) => (
                    <li key={i}>{honor}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;