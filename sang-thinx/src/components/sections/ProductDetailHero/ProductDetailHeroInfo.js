import React from 'react';
import { string } from 'prop-types';
import styles from './ProductDetailHeroInfo.module.scss';

const ProductDetailHeroInfo = ({
  product_title: title,
  product_subtitle: subtitle,
  description,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles['info-container']}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
};

ProductDetailHeroInfo.propTypes = {
  product_title: string.isRequired,
  product_subtitle: string.isRequired,
  description: string.isRequired,
}

export default ProductDetailHeroInfo;