import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { stateValue, handleFunction } = this.props;
    return (
      <select name="userRegion" id="userRegion" value={stateValue} onChange={handleFunction}>
        <option value="">-- Selecione a região do Brasil onde você mora --</option>
        <option value="Norte">Norte</option>
        <option value="Nordeste">Nordeste</option>
        <option value="Centro-Oeste">Centro-Oeste</option>
        <option value="Sudeste">Sudeste</option>
        <option value="Sul">Sul</option>
    </select>
    )
  }
}

Select.propTypes = {
  stateValue: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
}

export default Select;
