import React from 'react';
import ColorChangeContext from './ColorChangeContext';
import PropTypes from 'prop-types';


class Provider extends React.Component {
  state = {
    colorsArr: ['blue', 'red', 'yellow'],
    index: 0,
  }

  handleColorChange = () => {
    this.setState((prevState) => ({
      index: prevState.index < 2 ? prevState.index + 1 : 0,
    }))
  }

  render() {
    const contextValue = {
      ...this.state,
      handleColorChange: this.handleColorChange,
    }
    const { children } = this.props

    return(
      <ColorChangeContext.Provider value={contextValue}>
        {children}
      </ColorChangeContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
