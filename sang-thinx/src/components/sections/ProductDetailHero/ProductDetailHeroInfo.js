import React from 'react';
import { array, shape, string } from 'prop-types';
import styles from './ProductDetailHeroInfo.module.scss';
import {
  ColorSelector,
  QuantitySelector,
  Link,
  Dropdown,
  // DropdownButton
} from 'components/elements';
import { SIZE_CHART_TEXT } from 'core/constants';

const ProductDetailHeroInfo = ({
  product_title: title,
  product_droplets: droplets,
  description,
  price,
  available_colors: availableColors,
  available_sizes: availableSizes,
  size_chart: sizeChart, 
  savings,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles['info-container']}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.droplets}>{droplets}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles['options-container']}>
        <h2 className={styles.price}>${price}</h2>
        <ColorSelector colors={availableColors} />
        <QuantitySelector />
        <Dropdown
          className={styles['size-dropdown']}
          items={availableSizes}
          type='size'
        />
        {sizeChart &&
          <Link className={styles['size-chart']}>{SIZE_CHART_TEXT}</Link>
        }
      </div>
    </div>
  )
};

ProductDetailHeroInfo.propTypes = {
  product_title: string.isRequired,
  product_droplets: string.isRequired,
  description: string.isRequired,
  price: string.isRequired,
  available_colors: array.isRequired,
  available_sizes: array.isRequired,
  savings: shape({
    label: string,
    url: string
  })
}

ProductDetailHeroInfo.defaultProps = {
  savings: null
}

export default ProductDetailHeroInfo;