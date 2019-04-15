import React from "react"
import mypicture from "../images/jdalzatec.jpg"
import Layout from "../components/layout"

import "../styles/global.css"

export default () => (
  <Layout>
    <div id="about-me-container">
      <div id="div-about-me">
        <h2 style={{textAlign: "center"}}>Nice to meet you !</h2>
        <br />
        <img id="mypicture" src={mypicture} alt="me" />
        <div id="description">
          <p>

          My name is <strong style={{ color: "#1d3557"}}>Juan David Alzate Cardona</strong>.
          I am a Physics Engineer, highly passionate in computational physics.
          I am also an amateur programmer with a high interest in Data Science.
          I am from <a target="_" href="https://en.wikipedia.org/wiki/Manizales">Manizales</a>, <a target="_" href="https://en.wikipedia.org/wiki/Caldas_Department">Caldas</a>, <a target="_" href="https://en.wikipedia.org/wiki/Colombia">Colombia</a>.
    
          For more details, see my ré­sumé.

          </p>
        </div>
        
      </div>
    </div>
  </Layout>
)