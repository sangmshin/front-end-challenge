import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'components/elements';
import cx from 'classnames';
import styles from './ProductCard.module.scss';

const ProductCard = ({
  className,
  product_title: title,
  product_subtitle: subtitle,
  image: {
    src,
    alt
  }
}) => (
  <div className={cx(styles.root, className)}>
    <div className={styles['product-card-container']}>
      <div className={styles['product-card-image']}>
        <Link>
          <img src={src} alt={alt} />
        </Link>
      </div>
      <div>
        <Link>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  className: string,
  product_title: string.isRequired,
  product_subtitle: string,
  image: shape({
    src: string,
    alt: string
  }),
  url: string.isRequired
}

ProductCard.defaultProps = {
  className: '',
  product_subtitle: '',
  image: {},
  url: null
}

export default ProductCard;