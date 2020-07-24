/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import './bio.css';
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
        <h1>Hi I'am <span style={{color: '#ffffff'}}>{author.name}</span></h1>
        <h3>Software Engineer | Guitarist | Yoga Practitioner</h3>
        <p>
          This website is my digital space for taking notes on what I learn about
          technology and life, written with the intention to help myself with the
          quick source to refer to at any point of time and may be if these notes
          can help someone in some way. {` `}
        </p>
      </div>
    </div>
  )
}

export default Bio
