import React from 'react';
import './Home.css'; // Import your CSS file
import profileImage from '../components/piando.JPG'; // Import your profile image

function Home() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        <div className="right-section">
          <h2>Hi There!,</h2>
          <h1><span className="highlight typing-effect-name">I'm Veronica Louise Piando</span></h1>
          <h2><span className="highlight typing-effect-job">I am a Software Engineer</span></h2>
          <div className="button-container">
            <button className="cta-button">Get to know me</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
