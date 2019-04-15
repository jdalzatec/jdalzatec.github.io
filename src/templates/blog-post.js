import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

import "katex/dist/katex.min.css"
require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

export default function Template({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <div className="blog-post-container">
                <Helmet title={`jdalzatec - ${post.frontmatter.title}`} />
                <div className="blog-post">
                    <h2>{post.frontmatter.title}</h2>
                    <p>{post.frontmatter.date}</p>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>

                
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`