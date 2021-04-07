import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../styles/index.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.frontmatter.draft !== null || node.frontmatter.title === "About me"
      ? false
      : true
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <section>
        <div className="container" style={{ margin: "0 auto" }}>
          {/* <p
            style={{
              backgroundColor: "#f2d184",
              color: "#866118",
              borderLeft: "3px solid #866118",
              paddingLeft: "5px",
            }}
          >
            <b>Note:</b> Work in progress...
          </p> */}
          <h2 className="section-heading">Recent Posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="blog-post-item">
                <header>
                  <h3
                    className="post-title"
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <div className="post-date">
                    <small>{node.frontmatter.date}</small>
                  </div>
                </header>
                <section>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  /> */}
                </section>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            draft
          }
        }
      }
    }
  }
`
