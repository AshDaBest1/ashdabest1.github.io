import React from 'react';

const WorkExperience = () => {
    const workHistory = [
        {
            position: "Web Developer",
            company: "SKR Company Software Development Department",
            duration: "Septmber 2024 - 2025",
            responsibilities: [
                "Developed and maintained responsive websites and web applications using modern technologies.",
                "Collaborated with the design and backend teams to create seamless user experiences.",
                "Worked on both frontend (React.js) and backend (Node.js, Express) projects to meet client requirements."
            ],
            skillsGained: ["Web Development (Frontend & Backend)", "Team Collaboration", "Problem-solving and Critical Thinking"]
        },
        {
            position: "Content Writer",
            company: "SKR Company Media Department",
            duration: "March - 2024 till Aguest - 2024",
            responsibilities: [
                "Created high-quality content for the company’s website, blogs, and marketing materials.",
                "Conducted research on industry trends and competitors to produce relevant and engaging content."
            ],
            skillsGained: ["Content Writing and Editing", "Research and Analytical Skills", "Team Collaboration and Communication"]
        }
    ];

    return (
        <section id="work-experience" className="section">
            <h2>Work Experience</h2>

            <div className="experience-timeline">
                {workHistory.map((job, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <h3>{job.position}</h3>
                            <span className="company-name">{job.company}</span>
                            <span className="job-duration">{job.duration}</span>
                        </div>

                        <h4>Responsibilities & Achievements:</h4>
                        <ul className="responsibilities">
                            {job.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>

                        <h4>Skills Developed:</h4>
                        <div className="skills-gained">
                            {job.skillsGained.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="work-reflection">
                <h3>Work-Based Learning Reflection</h3>
                <p>
                    My work experience as a Web Developer at SKR Company has been a vital part of my professional development. This opportunity allowed me to apply my technical skills in a real-world setting, sharpen my abilities, and gain insights into the expectations and dynamics of the technology industry.
                    <p></p>
                    One of the most significant skills I have strengthened is full-stack web development. At SKR, I worked on both the frontend, using React.js, and the backend, using Node.js and Express. Through developing dynamic web pages, integrating APIs, and collaborating with designers, I learned how to balance user experience with technical performance. I also became more comfortable managing databases and server-side operations, which helped me understand the complete cycle of web application development.
                    <p></p>
                    A major challenge I faced early on was learning how to adapt quickly to new technologies and project requirements. In the classroom, projects usually followed a fixed path; however, in a real company environment, tasks often change based on client needs. To overcome this, I had to improve my flexibility, time management, and communication skills. I learned to ask better questions, work closely with team members, and respond quickly to feedback. These skills have made me a more effective team player and developer.
                    <p></p>
                    Another area of growth has been in professional communication and collaboration. Working with cross-functional teams—designers, backend developers, and project managers—taught me how important it is to explain ideas clearly, listen actively, and solve problems together. These experiences made me realize that technical knowledge alone is not enough; success in the professional world also requires soft skills like leadership, teamwork, and adaptability.
                    <p></p>
                    Overall, this experience has deeply influenced my career goals. It confirmed my passion for web development, but it also opened my eyes to the possibility of specializing in backend development or cloud computing in the future. I now aim to further develop my skills in server management, security, and scalable application design. Thanks to this early exposure, I am more confident, better prepared, and more motivated to continue growing as a developer.
                    <p></p>
                    In conclusion, my work-based learning experience at SKR Company has been transformative. It strengthened my technical foundation, challenged me to grow personally and professionally, and gave me a clearer vision of the career path I want to pursue.
                </p>
            </div>
        </section>
    );
};

export default WorkExperience;