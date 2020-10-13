import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import styles from './ProductDetailHeroOptions.module.scss';
import {
  Button,
  ColorSelector,
  QuantitySelector,
  Link,
  Dropdown
} from 'components/elements';
import { ADD_TO_CART_TEXT, SIZE_CHART_TEXT } from 'core/constants';

const ProductDetailHeroOptions = ({
  price,
  available_colors: availableColors,
  available_sizes: availableSizes,
  size_chart: sizeChart, 
  savings,
}) => {
  return (
    <div className={styles.root}>
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
          <Link className={styles['size-chart']}>
            {SIZE_CHART_TEXT}
          </Link>
        }
        <Button
          accessibilityText='add to cart'
          ariaLabel='add to cart'
          className={styles['add-to-cart']}
          type='submit'
        >
          {ADD_TO_CART_TEXT}
        </Button>
        {savings &&
          <Link className={styles.savings}>
            {savings.label}
          </Link>
        }
      </div>
    </div>
  )
};

ProductDetailHeroOptions.propTypes = {
  price: string.isRequired,
  available_colors: array.isRequired,
  available_sizes: array.isRequired,
  size_chart: bool.isRequired,
  savings: shape({
    label: string,
    url: string
  })
}

ProductDetailHeroOptions.defaultProps = {
  savings: null
}

export default ProductDetailHeroOptions;