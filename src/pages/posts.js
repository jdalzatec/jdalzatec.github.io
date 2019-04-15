import React from "react"
import { Link, graphql } from "gatsby"
import Section from "../components/section"


export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Section name="Posts">
        <ul>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <li key={post.id}>
                  <div>
                    <h4>
                      <Link to={post.frontmatter.path} style={{ color: "#1d3557" }}>
                        {post.frontmatter.title}
                      </Link>
                    </h4>
                    <p>{post.frontmatter.date}</p>
                  </div>
                </li>
              )
            })}
          </ul>
    </Section>
  )
}


export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`