import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <div className="container mt-5">
      <h2>About Our Note-Taking App</h2>
      <p>
        Welcome to our powerful and intuitive note-taking application designed to boost your productivity and creativity.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>User-Friendly Interface</li>
        <li>Real-time Updates</li>
        <li>Tagging System for Efficient Organization</li>
        <li>Rich Text Editing for Expressive Notes</li>
      </ul>

      <h3>Tech Stack:</h3>
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB</li>
        <li>Authentication: JWT (JSON Web Tokens)</li>
      </ul>

      <h3>How to Get Started:</h3>
      <ol>
        <li>Login or Signup to create your account</li>
        <li>Create and organize your notes with our user-friendly interface</li>
        <li>Utilize the tagging system for efficient categorization</li>
        <li>Experience real-time updates and rich text editing capabilities</li>
      </ol>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or issues, feel free to reach out to us. We're here to help!
      </p>
      <ul>
        <li>Email: chaitanyasatarkar123@gmail.com</li>
        <li>Phone: 9130452737</li>
        <li>Address: shivaji nagar isbavi pandharpur , 413304, </li>
      </ul>

      <h3>Support and Feedback:</h3>
      <p>
        We appreciate your feedback! If you have any questions, suggestions, or need assistance, please reach out to our support team.
      </p>

      <p>
        Thank you for choosing our note-taking app. We hope it becomes an essential tool in your daily routine.
      </p>
    </div>
  );
};

export default About;
