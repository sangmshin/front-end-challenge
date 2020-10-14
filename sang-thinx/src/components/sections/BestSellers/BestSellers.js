import React from 'react';
import { array } from 'prop-types';
import { ProductCard } from 'components/elements';
import { isArrayWithLength } from 'core/utils';

const BestSellers = ({ best_selling_products: bestSellers }) => {
  if (!isArrayWithLength(bestSellers)) return null;

  const productCards = bestSellers.map(product => (
    <ProductCard {...product} key={product.product_title} />
  ));

  return (
    <section>
      {productCards}
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