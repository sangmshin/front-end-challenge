import React from 'react';

const ProductCard = ({
  product_title,
  product_droplets,
  image: {
    src,
    alt
  },
  url
}) => {
  return (
    <img src={src} alt={alt} />
  )
}

export default ProductCard;