import React from "react";

function About() {
  const infoStyle = {
    width: "300px",
    float: "left",
    marginRight: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 40px 0px cyan",
  }
  const catsStyle = {
    width: "300px",
    float: "right",
    marginRight: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 40px 0px cyan",
    marginTop: "-30px",
  }

  const floatL = {
    float: "left",
  }
  
  return (
    <div>
      <link rel="icon" href="./assets/links/about.png"></link>
    <p class="info">
      <img src={require ("../assets/profile.jpg")} style={infoStyle} alt="profile"></img>
      <p>Hello, thank you for coming to visit my page, hope you enjoy what I have done with the place!<br /><br />
      My name is <span class="lightgreen">Borjan Bartula</span>.<br />
      Pronounced <span
      class="red">Bor</span>-<span class="orange">y&#275;n</span> <span
      class="red">Bar</span>-<span class="lightblue">t&#363;</span>-<span
      class="orange">la</span>.<br /><br />Aspiring to gain as much knowledge as possible. Driven, passionate, resourceful, witty, strategic, honest; just some of the
      words that describe me. Mainly, kind and helpful. I have always enjoyed working with computers, whether it was
      playing games, writing, reading, learning, teaching, manipulating, researching, I have always enjoyed the concept of
      a world connected. Wanting to be a bigger part of that world, I have started taking steps to achieve my newest goal:
      <span class="lightgreen">Coder/Programmer/Developer!</span>
      </p>
      <p>My plan to achieve this
      starts with the <span class="skyblue">Coding Bootcamp</span> at <span
      class="skyblue">University of North Carolina at Chapel Hill</span>.</p>
    </p>
    <p class="achievement">
      <p><span class="palegreen" style={floatL}>LINKS THAT MAY INTEREST YOU:</span></p><br />
      <ul class="palegreen" style={floatL}>
        <li><a href="https://github.com/MrBusiness87" target="_blank" rel="noopener noreferrer">GIT HUB PROFILE</a></li>
        <li><a href="https://www.linkedin.com/in/borjanbartula" target="_blank" rel="noopener noreferrer">LINKEDIN PROFILE</a></li>
        <li>Email: bbartula87@gmail.com</li>
        <li>Phone#: (919) 332-4516</li>
        <li><a href="../assets/RESUME Coding.pdf" target="_blank" download>
          CLICK HERE TO DOWNLOAD RESUME
        </a></li>
      </ul>
      <p class="cats"><img src={require ("../assets/candp.jpg")} style={catsStyle} alt="cats"></img></p>
    </p>
  </div>
  );
}

export default About;
