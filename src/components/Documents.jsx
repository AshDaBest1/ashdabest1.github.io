import React from 'react';

import cv from "../assets/documents/Abedalaziz_Halloumeh_CV (1).pdf"
import coverLetter from "../assets/documents/Abedalaziz_Halloumeh_Cover_Letter.pdf"
const Documents = () => {
  return (
    <section id="documents" className="section">
      <h2>Job Seeking Documents</h2>
      
      <div className="document-card">
        <h3>Curriculum Vitae (CV)</h3>
        <p>My comprehensive professional CV detailing education, experience, and skills.</p>
        <a href={cv} target='_blank' className="btn">
          View CV
        </a>
      </div>
      
      <div className="document-card">
        <h3>Cover Letter Sample</h3>
        <p>An example of my professional cover letter tailored for job applications.</p>
        <a href={coverLetter} target='_blank' className="btn">
          View Cover Letter
        </a>
      </div>
      
      {/* <div className="document-card">
        <h3>References</h3>
        <p>List of professional references available upon request.</p>
      </div>
      
      <div className="document-card">
        <h3>Letters of Recommendation</h3>
        <p>Compilation of recommendation letters from professors, employers, or mentors.</p>
      </div> */}
    </section>
  );
};

export default Documents;