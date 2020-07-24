import React from "react"
import { Link } from "gatsby"
import "./layout.css"

/**
 * List link creates a list component which is type of Link
 * @param {*} props
 */
const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ title, children }) => {
  return (
    <div>
      <header style={{backgroundColor: '#282c34', color: '#ffffff'}}>
        <div className="container" style={{ padding: '1.5rem', maxWidth: '1200px', margin: '0 auto'}}>
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <h3
              style={{
                display: 'inline',
                marginTop: 0
              }}
            >
              {title}
            </h3>
          </Link>

          <ul style={{listStyle: 'none', float: 'right'}}>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/notes/">Notes</ListLink>
          </ul>
        </div>
      </header>
      <main style={{ margin: '0 auto'}}>{children}</main>
      <footer className="container" style={{padding: '1.5rem', margin: '0 auto'}}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
