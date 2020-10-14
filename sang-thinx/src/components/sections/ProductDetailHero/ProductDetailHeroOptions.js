import React from 'react';
import { array, bool, shape, string } from 'prop-types';
import styles from './ProductDetailHeroOptions.module.scss';
import {
  Button,
  ColorSelector,
  Dropdown,
  Link,
  QuantitySelector,
} from 'components/elements';
import { ADD_TO_CART_TEXT, SIZE_CHART_TEXT } from 'core/constants';

const ProductDetailHeroOptions = ({
  price,
  available_colors: availableColors,
  available_sizes: availableSizes,
  size_chart: sizeChart, 
  savings,
}) => (
  <div className={styles.root}>
    <div>
      <h2 className={styles.price}>${price}</h2>
      <ColorSelector colors={availableColors} />
      <QuantitySelector max={9} />
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
        accessibleText={ADD_TO_CART_TEXT}
        ariaLabel={ADD_TO_CART_TEXT}
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
);

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