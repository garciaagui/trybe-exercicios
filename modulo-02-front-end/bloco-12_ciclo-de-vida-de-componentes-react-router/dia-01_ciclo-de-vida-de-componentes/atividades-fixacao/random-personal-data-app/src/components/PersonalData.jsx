import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PersonalData extends Component {
  render() {
    const {name, email, age, picture} = this.props
    return (
      <div>
        <h2>{name}</h2>
        <h3>Email: {email}</h3>
        <h3>Age: {age}</h3>
        <img src={picture} alt={name} />
      </div>
    )
  }
}

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
}

export default PersonalData;
