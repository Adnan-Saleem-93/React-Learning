import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../images/unnamed.png'
import {Link} from 'react-router-dom'

const Product = ({id, name, price, image}) => {
  return (
    <>
      <div>
        <Link to={`/product/${id}`}>
          <h4>{name}</h4>
        </Link>
        <img src={image[0].url} alt={name} />
        <p style={{marginBottom: 0}}>${price}</p>
      </div>
    </>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.array.isRequired
}
Product.defaultProps = {
  name: 'default name',
  price: 5.5,
  image: [{url: defaultImage}]
}
export default Product
