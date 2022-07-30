import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Textarea extends Component {
  render() {
    const { stateValue, handleFunction } = this.props;
    let error = undefined;
    if (stateValue.length > 150) error = 'Texto muito grande! Limite: 150 caracteres.';
    return (
      <label className="flex-label">
        Fale um pouco sobre você :)
        <textarea id="userInfo" name="userInfo" value={stateValue} onChange={handleFunction}/>
        <span className='error'>{error ? error : ''}</span>
    </label>
    );
  }
}

Textarea.propTypes = {
  stateValue: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
}

export default Textarea;