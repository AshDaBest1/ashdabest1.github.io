import React from 'react';
// import learningStyleVisual from '../assets/images/learning-style-visual.png';
import goodCommsComic from '../assets/images/good-comms-comic.png';
import poorCommsComic from '../assets/images/poor-comms-comic.png';
import BigFivePersonalityTest from "../assets/documents/My results from the BigFive personality test - Free open-source BigFive personality traits test.pdf"
import HowCompanyHiers from "../assets/documents/How a Comapny Hires Assginment.pdf"
import JobAvertisments from "../assets/documents/Job Advertisments Assginment.pdf"

const WRNVirtual = () => {
  return (
    <section id="wrn-virtual" className="section">
      <h2>WRN Assignments</h2>

      <div className="learning-style">
        <h3>1. Learning Style and Strategy</h3>
        <p><b>🧠 Visual Learner 🧠</b></p>
        <p>
          I am a visual learner, which means I learn best through images, diagrams, videos, and visual aids. This helps me quickly understand and remember complex concepts. In my work as a web developer, I use flowcharts, UI sketches, and video tutorials to plan, learn, and solve problems. My visual learning style also supports my professional growth by helping me stay focused and organized during training and projects.
        </p>
      </div>

      <div className="comics">
        <h3>2. Communication in the Workplace</h3>

        <div className="comic">
          <div className="comic-good">
            <h4>Good Communication</h4>
            <img
              src={goodCommsComic}
              alt="Comic strip depicting good workplace communication"
              className="comic-strip"
            />
            {/* <p>Analysis of what makes this communication effective.</p> */}
          </div>

          <div className="comic-poor">
            <h4>Poor Communication</h4>
            <img
              src={poorCommsComic}
              alt="Comic strip depicting poor workplace communication"
              className="comic-strip"
            />
            {/* <p>Analysis of why this communication is ineffective and how to improve it.</p> */}
          </div>
        </div>
      </div>

      <div className='personality-test'>
        <h3>3. Big Five Personality Test</h3>
        <a href={BigFivePersonalityTest} className='btn' target='_blank'>View Test Details</a>
      </div>
      <div className='personality-test'>
        <h3>4. Job Advertisment</h3>
        <a href={JobAvertisments} className='btn' target='_blank'>View Details</a>
      </div>
      <div className='personality-test'>
        <h3>5. How a Company Hires</h3>
        <a href={HowCompanyHiers} className='btn' target='_blank'>View Details</a>
      </div>
      <div className="linkedin">
        <h3>LinkedIn Profile</h3>
        <a
          href="https://www.linkedin.com/in/abedalaziz-halloumeh-7531b5320/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View My LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default WRNVirtual;