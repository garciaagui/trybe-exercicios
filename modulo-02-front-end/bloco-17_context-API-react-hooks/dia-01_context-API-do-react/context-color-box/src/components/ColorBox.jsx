import React from 'react';
import '../styles/box.css';
import ColorChangeContext from '../context/ColorChangeContext';

class ColorBox extends React.Component {
  render() {

    const { colorsArr, index, handleColorChange } = this.context

    return(
          <button
            type="button"
            className="box"
            style={ { backgroundColor: colorsArr[index] } }
            onClick={() => {handleColorChange()}}
          >
            Click me to change my color!
          </button>
    )
  }
}

ColorBox.contextType = ColorChangeContext;

export default ColorBox;
