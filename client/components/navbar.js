import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div >
    <nav>
      {isLoggedIn ? (
        <div className="header">
          {/* The navbar will show these links after you log in */}
          <Link to="/categories"><img id="logo-home" src="../images/hanger (1).png" /></Link>
          <div className="header-right">
            <a id="logout-btn" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>  
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link> */}
          <div id="member">Not a member?</div>
          <Link to="/signup" id="sign-up">Sign Up</Link>
        </div>
      )}
    </nav>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
