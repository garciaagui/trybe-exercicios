import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props
    const { name, type, averageWeight, image, moreInfo } = pokemon
    const { value, measurementUnit } = averageWeight
    return (
      <section className='container-pokemon'>
        <span className='title-pokemon'>{(name).toUpperCase()}</span>
        <section className='info-pokemon'>
          <span>
            <span className='type-info'>Type: </span>{type}
          </span>
          <span>
            <span className='type-info'>Average Weight: </span>{value}{measurementUnit}
          </span>
          <a href={moreInfo} target='_blank' rel='noreferrer'>
            Click for more Info
          </a>
        </section>
        <section className='section-image'>
          <img className='image-pokemon' src={image} alt={name} />
        </section>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}.isRequired

export default Pokemon;