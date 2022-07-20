import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { value, measurementUnit } = this.props.averageWeight
    return (
      <section className='container-pokemon'>
        <span className='title-pokemon'>{(this.props.name).toUpperCase()}</span>
        <section className='info-pokemon'>
          <span>
            Type: <span className='value'>{this.props.type}</span>
          </span>
          <span>
            Average Weight: <span className='value'>{value}{measurementUnit}</span>
          </span>
          <a href={this.props.moreInfo} target='_blank' rel='noreferrer'>
            <span className='value'>Click for more Info</span>
          </a>
        </section>
        <section className='section-image'>
          <img className='image-pokemon' src={this.props.image} alt={this.props.name} />
        </section>
      </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
}

export default Pokemon;