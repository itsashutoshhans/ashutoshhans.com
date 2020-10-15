import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import "./layout.scss"

const ListLink = props => (
  <li style={{ display: "inline-block", margin: "0 1rem 0 0" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: '0.8125rem',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          paddinTop: '5px',
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          marginBottom: '1rem'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `0 1.5rem`,
        height: '100%',
      }}
    >
      <header className="main-header">
        {header}
        <div className="nav">
          <ul style={{ listStyle: "none"}}>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/notes/">Notes</ListLink>
          </ul>
        </div>
        
      </header>
      <main>{children}</main>
      <footer style={{marginTop: '4.375rem', padding: '1.75rem 0'}}>
       Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> {` | `}
        <a href="https://ko-fi.com/ashutoshhans">Support</a>
      </footer>
    </div>
  )
}

export default Layout
