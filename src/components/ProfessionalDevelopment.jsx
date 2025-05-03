import React from 'react';
import ProfessionalPlanPdf from "../assets/documents/Professional Plan - Abedalaziz Halloumeh.pdf"
const ProfessionalDevelopment = () => {
    return (
        <section id="professional-development" className="section">
            <h2>Professional Development</h2>

            <div className="development-plan">
                <h3>Professional Development Plan</h3>
                {/* <p>
          Outline your short-term and long-term professional goals, the steps 
          you're taking to achieve them, and how your education and experience 
          are preparing you for your desired career path.
        </p> */}
                <a href={ProfessionalPlanPdf} target="_blank"
                    rel="noopener noreferrer" className="btn">
                    View Plan
                </a>
            </div>

            <div className="work-reflection">
                <h3>Work-Based Learning Self-Reflection</h3>
                <p>
                    My work exposure and experiences, particularly my role as a Web Developer and former Content Writer at SKR Company, have played a crucial role in shaping my professional skills, expanding my body of work, and clarifying my career aspirations.
                    <p></p>
                    Starting as a Content Writer at SKR allowed me to develop strong communication and research skills. Writing articles, blogs, and marketing materials taught me the importance of understanding the target audience, maintaining consistency in tone, and working closely with design and marketing teams. This experience sharpened my ability to work in a team environment and taught me how content creation supports business goals — lessons that remain valuable even after transitioning into a technical role.
                    <p></p>
                    Later, moving into a Web Developer position at SKR allowed me to apply and deepen my technical skills. Through hands-on projects involving React.js for frontend development and Node.js/Express for backend development, I significantly improved my programming skills. I also developed better problem-solving abilities by troubleshooting technical issues and adapting to new frameworks and tools as project needs changed.
                    <p></p>
                    These work experiences helped me realize the importance of both technical expertise and soft skills like communication, teamwork, and flexibility. Facing challenges such as tight deadlines and evolving project requirements taught me resilience, adaptability, and the value of clear, proactive communication within a team.
                    <p></p>
                    Overall, my exposure at SKR has not only expanded my technical portfolio but has also reinforced my passion for web development and backend technologies. These experiences have directly influenced my career path by confirming that I want to continue developing as a Full-Stack or Backend Developer, with a future focus on cloud computing and scalable application design.
                    <p></p>
                    My academic program at Beirut Arab University has provided a strong theoretical background, while my work experiences have allowed me to apply and grow those skills in real-world settings. Together, they are preparing me to meet my professional goals with confidence.
                </p>
            </div>

            {/* <div className="additional-professional">
                <h3>Additional Professional Information</h3>
                <div className="certifications">
                    <h4>Certifications</h4>
                    <ul>
                        <li>Certification 1 - Issuing Organization (Year)</li>
                        <li>Certification 2 - Issuing Organization (Year)</li>
                    </ul>
                </div>

                <div className="trainings">
                    <h4>Professional Development Trainings & Workshops</h4>
                    <ul>
                        <li>Workshop 1 - Organization (Year)</li>
                        <li>Training Program - Organization (Year)</li>
                    </ul>
                </div>

                <div className="awards">
                    <h4>Awards & Honors</h4>
                    <ul>
                        <li>Award Name - Organization (Year)</li>
                        <li>Honor Society - Chapter (Year)</li>
                    </ul>
                </div>
            </div> */}
        </section>
    );
};

export default ProfessionalDevelopment;