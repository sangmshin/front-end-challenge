import React from 'react';
import { array, shape, string } from 'prop-types';
import styles from './ProductDetailHeroInfo.module.scss';
import { ColorSelector } from 'components/elements';

const ProductDetailHeroInfo = ({
  product_title: title,
  product_droplets: droplets,
  description,
  price,
  available_colors: availableColors,
  available_sizes: availableSizes,
  savings,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles['info-container']}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.droplets}>{droplets}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles['variations-container']}>
        <h2 className={styles.price}>${price}</h2>
        <ColorSelector colors={availableColors} />
      </div>
    </div>
  )
};

ProductDetailHeroInfo.propTypes = {
  product_title: string.isRequired,
  product_droplets: string.isRequired,
  description: string.isRequired,
  price: string.isRequired,
  available_colors: array,
  available_sizes: array.isRequired,
  savings: shape({
    label: string,
    url: string
  })
}

ProductDetailHeroInfo.defaultProps = {
  available_colors: [],
  savings: null
}

export default ProductDetailHeroInfo;