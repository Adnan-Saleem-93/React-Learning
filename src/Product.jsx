import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from './images/unnamed.png'

const Product = ({name, price, image}) => {
  return (
    <>
      <div>
        <h4>{name}</h4>
        <img src={image.url} alt={name} />
        <p style={{marginBottom: 0}}>${price}</p>
      </div>
    </>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}
Product.defaultProps = {
  name: 'default name',
  price: 5.5,
  image: {url: defaultImage}
}
export default Product
