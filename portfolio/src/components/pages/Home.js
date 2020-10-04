import React from "react";

function Home() {
  const infoStyle = {
    width:"150px",
    height: "150px",
  }

  return (
    <div>
      <link rel="icon" href="./assets/links/index.png"></link>
      <p>
        <div class="line1">
          WELCOME TO:<br />BORJANS PORTFOLIO<br />
        <img src={require ("../assets/profile.jpg")} onMouseOver />
        </div>
        <br />
        <div class="line2">
          COME ON IN
        </div>
        <div class="info">
          <a href="http://www.linkedin.com/in/borjanbartula" title="LINKED IN"><img src={require ("../assets/links/linkedin.png")} style={infoStyle} /></a>
        </div>
      </p>
    </div>
  );
}

export default Home;
