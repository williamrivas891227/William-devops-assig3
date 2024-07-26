import React from 'react';
import './landingpage.css';

const landingpage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <img src={`${process.env.PUBLIC_URL}/jenkins-logo.png`} alt="Jenkins Logo" className="jenkins-logo" />
        <h1>Welcome to Jenkins</h1>
      </header>
      <section className="content">
        <h2>About Jenkins</h2>
        <p>
          Jenkins is an open-source automation server that helps automate the
          parts of software development related to building, testing, and
          deploying, facilitating continuous integration and continuous delivery.
        </p>
        <p>
          ************test to check the funsionality of hook***************
        </p>
        <p>
          This landing page is created as part of the DevOps Assignment 3 for theS
          class taught by Professor Sagara Samarawickrama.
        </p>
        <img src={`${process.env.PUBLIC_URL}/jenkins-workflow.png`} alt="Jenkins Workflow" className="workflow-image" />
        <h2>Features of Jenkins</h2>
        <ul>
          <li>Easy installation and configuration</li>
          <li>Plugins support</li>
          <li>Extensibility</li>
          <li>Distributed builds</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Jenkins. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default landingpage;
