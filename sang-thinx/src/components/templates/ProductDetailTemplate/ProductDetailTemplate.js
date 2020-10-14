import React from 'react';
import { object } from 'prop-types';
import idx from 'idx';
import { connect } from 'react-redux';
import { ProductDetailHero, BestSellers } from 'components/sections';
import { getPageData } from 'store/page-data/selectors';

const ProductDetailTemplate = ({ pageData }) => {
  const heroData = idx(pageData, _ => _.hero)
  const bestSellersData = idx(pageData, _ => _.best_sellers)
  if (!pageData || !heroData) return null;

  return (
    <main>
      <ProductDetailHero {...heroData} />
      <BestSellers {...bestSellersData} />
    </main>
  )
};

ProductDetailTemplate.propTypes = {
  pageData: object
}

ProductDetailTemplate.defaultProps = {
  pageData: {}
}

const mapStateToProps = state => ({
  pageData: getPageData(state)
});

export default connect(mapStateToProps)(ProductDetailTemplate);