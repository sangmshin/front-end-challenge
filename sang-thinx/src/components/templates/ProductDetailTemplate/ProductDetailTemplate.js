import React from 'react';
import { object } from 'prop-types';
import idx from 'idx';
import { connect } from 'react-redux';
import { ProductDetailHero } from 'components/sections';
import { getPageData } from 'store/page-data/selectors';

const ProductDetailTemplate = ({ pageData }) => {
  if (!pageData) return null;

  const heroData = idx(pageData, _ => _.hero)

  return (
    <main>
      <ProductDetailHero {...heroData} />
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