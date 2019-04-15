import React from "react"
import { Link, graphql } from "gatsby"
import Section from "../components/section"
import { Helmet } from "react-helmet"


export default () => (
    <Section name="Contact">
      <span>I'm always happy to hear from you.</span>
      <br />
      <a href="mailto:jdalzatec@gmail.com">jdalzatec@gmail.com</a>

      <ul>
        <li>
          <a href="http://github.com/jdalzatec/">Github</a>
        </li>
      </ul>
    </Section>
)