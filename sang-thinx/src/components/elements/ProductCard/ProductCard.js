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
}) => {
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles['product-card-image']}>
        <Link>
          <img src={src} alt={alt} />
        </Link>
      </div>
      <Link>
        <h2>{title}</h2>
      </Link>
      <p>{subtitle}</p>
    </div>
  )
}

ProductCard.propTypes = {
  product_title: string.isRequired,
  product_subtitle: string,
  image: shape({
    src: string,
    alt: string
  }),
  url: string.isRequired
}

ProductCard.defaultProps = {
  image: null,
  url: null
}

export default ProductCard;