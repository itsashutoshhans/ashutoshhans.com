import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import "./layout.scss"

/**
 * List link creates a list component which is type of Link
 * @param {*} props
 */
const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ title, children }) => {
  return (
    <div>
      <header className="main-header">
        <div
          className="container"
          style={{ padding: "1.5rem", margin: "0 auto" }}
        >
          <Link
            className="brand"
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <span className="brand">ashutoshhans</span>
          </Link>

          <ul style={{ listStyle: "none", float: "right" }}>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/notes/">Notes</ListLink>
          </ul>
        </div>
      </header>
      <main style={{ margin: "0 auto" }}>{children}</main>
      <footer
        className="container"
        style={{ padding: "1.5rem", margin: "0 auto" }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
