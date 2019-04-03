import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        'flex-direction': `column`,
        'flex-wrap': 'wrap',
        height: '80px',
        margin: `0 auto`,
        padding: `0 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
          <img src="http://remingtonjdavis.com/logo.png" alt="logo" height="40px" width="100px"/>
      <div style={{display: 'flex', alignSelf: 'flex-end', height: '80px', lineHeight:'80px', flexDirection:'row'}}>
      <div >About</div>
      <div >Projects</div>
      <div >Social</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
