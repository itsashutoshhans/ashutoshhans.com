/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import './bio.scss';
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className="bio"
      style={{
        backgroundColor: '#282c34',
        color: '#999'
      }}
    >
      <div className="container">
        <h1>Hi I'm <span className="name">{author.name}</span></h1>
        <h3>Software Engineer | Guitarist | Yoga Practitioner</h3>
        <p>
          This website is my digital space for taking notes on what I learn about
          technology and life, written with the intent to help me have a
          quick source of reference at any point in time and may be if these notes
          can help any in some way. {` `}
        </p>
      </div>
    </div>
  )
}

export default Bio
