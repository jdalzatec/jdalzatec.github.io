import React from "react"
import Layout from "./layout"
import { Helmet } from "react-helmet"


export default (props) => (
    <Layout>
      <div>
        <Helmet title={`jdalzatec - ${props.name}`} />
        <h1>{props.name}</h1>
        <hr />
        {props.children}
      </div>
    </Layout>
)