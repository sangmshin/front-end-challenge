import React from 'react';
import { array } from 'prop-types';
import cx from 'classnames';
import { ProductCard } from 'components/elements';
import { isArrayWithLength } from 'core/utils';
import styles from './BestSellers.module.scss';

export const BestSellers = ({ best_selling_products: bestSellers }) => {
  if (!isArrayWithLength(bestSellers)) return null;

  const productCards = bestSellers.map(product => (
    <ProductCard
      {...product}
      className={styles['best-seller-card']}
      key={product.product_title}
    />
  ));

  return (
    <section className={cx(styles.root, 'page-gutter')}>
      <div className={cx(styles['products-wrapper'], 'page-max-width')}>
        {productCards}
      </div>
    </section>
  )
};

BestSellers.propTypes = {
  best_selling_products: array
};

BestSellers.defaultProps = {
  best_selling_products: []
};

export default BestSellers;