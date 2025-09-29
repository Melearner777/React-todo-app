import React from "react";
import "./About.css"; 

export const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About This App</h2>
      <p className="about-text">
        Welcome to the <strong>React To-Do App</strong>!  This app helps you
        manage your daily tasks in a simple and organized way. You can easily
        <em> add, delete, and track </em> your todos.
      </p>

      <p className="about-text">
        The app is built using <strong>React</strong> with concepts like
        components, state, props, and routing. Your todos are saved in
        <strong> localStorage</strong>, so they won’t disappear when you refresh
        the page.
      </p>

      <p className="about-text">
        This project is mainly for learning React basics, but it can also serve
        as a foundation for more advanced apps.
      </p>
      <footer className="about-footer">
        <div className="about-github">
          <a
            href="https://github.com/Melearner777"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Visit my GitHub for issues or contributions
          </a>
        </div>
        
    </footer>
    </div>



  );
};
