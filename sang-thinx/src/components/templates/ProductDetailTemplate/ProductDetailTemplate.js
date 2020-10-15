import React from 'react';
import { bool, object } from 'prop-types';
import idx from 'idx';
import { connect } from 'react-redux';
import { getPageData } from 'store/page-data/selectors';
import { getScrollBlocked } from 'store/ui/selectors';
import { ProductDetailHero, BestSellers } from 'components/sections';

export const ProductDetailTemplate = ({
  pageData,
  scrollBlocked
}) => {
  const heroData = idx(pageData, _ => _.hero)
  const bestSellersData = idx(pageData, _ => _.best_sellers)
  if (!pageData || !heroData) return null;

  return (
    <main className={scrollBlocked ? 'scroll-blocked' : null}>
      <ProductDetailHero {...heroData} />
      <BestSellers {...bestSellersData} />
    </main>
  )
};

ProductDetailTemplate.propTypes = {
  pageData: object,
  scrollBlocked: bool.isRequired,
}

ProductDetailTemplate.defaultProps = {
  pageData: {}
}

const mapStateToProps = state => ({
  pageData: getPageData(state),
  scrollBlocked: getScrollBlocked(state)
});

export default connect(mapStateToProps)(ProductDetailTemplate);