import React from "react";

function About() {
  const imgstyle = {
    width: "300px",
    float: "left",
    marginRight: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 40px 0px cyan",
  }
  const lightgreen = {
    color: "lightgreen",
  }
  const red = {
    color: "red",
  }
  const orange = {
    color: "orange",
  }
  const lightblue = {
    color: "lightblue",
  }
  const skyblue = {
    color: "skyblue",
  }
  const palegreen = {
    color: "palegreen",
    fontWeight: "bold",
  }
  const profileSrc = {

  }

  return (
    <div>
    <p class="about">
    <img src={require ("../assets/profile.jpg")} style={imgstyle} alt="profile"></img>
    <p>Hello, thank you for coming to visit my page, hope you enjoy what I have done with the
    place!
    My name is <span style={lightgreen}>Borjan Bartula</span>.</p>
    <p>Pronounced <span
      style={red}>Bor</span>-<span style={orange}>y&#275;n</span> <span
      style={red}>Bar</span>-<span style={lightblue}>t&#363;</span>-<span
      style={orange}>la</span>.</p>
      <p>I was born in <u>Yugoslavia</u>, the summer of <b>1987</b>. Always aspire
    to gain as much knowledge as possible. Driven, passionate, resourceful, witty, strategic, honest; just some of the
    words that describe me. Mainly, kind and helpful. I have always enjoyed working with computers, whether it was
    playing games, writing, reading, learning, teaching, manipulating, researching, I have always enjoyed the concept of
    a world connected. Wanting to be a bigger part of that world, I have started taking steps to achieve my newest goal:
    <span style={lightgreen}>Coder/Programmer/Developer!</span></p>
    <p>My plan to achieve this
    starts with the <span style={skyblue}>Coding Bootcamp</span> at <span
      style={skyblue}>University of North Carolina at Chapel Hill</span>.</p>
  </p>
  <p class="achievement">
    <p><span style={palegreen}>LINKS THAT MAY INTEREST YOU:</span></p>
    <ul style={palegreen}>
      <li><a href="https://github.com/MrBusiness87" target="_blank" rel="noopener noreferrer">GIT HUB PROFILE</a></li>
      <li><a href="https://www.linkedin.com/in/borjanbartula" target="_blank" rel="noopener noreferrer">LINKEDIN PROFILE</a></li>
      <li>Email: bbartula87@gmail.com</li>
      <li>Phone#: (919) 332-4516</li>
      <li><a href="assets/RESUME Coding.pdf" download>
          CLICK HERE TO DOWNLOAD RESUME
        </a></li>
    </ul>
    <p class="cats"><img src="assets/1.jpg" style={imgstyle} alt="cats"></img></p>
  </p>
  </div>
  );
}

export default About;
