import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import Navbar from './navbar';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <Navbar />
      <Link to={`/categories`}><button>+</button></Link>
      <div id="closet-container">
        <h1 id="your-closet">Your Closet</h1>
        <ul>
          <li>Jeans</li>
        </ul>    
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
