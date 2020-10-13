import React from 'react';
import { array, string } from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { getLastBreakPoint } from 'store/ui/selectors';
import Slider from 'react-slick';
import ProductDetailHeroInfo from './ProductDetailHeroInfo';
import ProductDetailHeroOptions from './ProductDetailHeroOptions';
import styles from './ProductDetailHero.module.scss';

const SLIDER_CONFIG = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProductDetailHero = ({
  images,
  lastBreakPoint,
  ...otherProps
}) => {
  const renderImages = () => (
    images && images.map(({ src, alt }, index) => (
      <div className={styles['image-wrapper']} key={index} >
        <img src={src} alt={alt} />
      </div>
    ))
  );
  const isSmallBreakPoint = /xsmall$/i.test(lastBreakPoint) || /small$/i.test(lastBreakPoint);
  const isMediumBreakPoint = /medium$/i.test(lastBreakPoint);
  
  if (isSmallBreakPoint) {
    return (
      <section className={cx(styles.root, 'page-gutter')}>
        <div className={cx(styles['product-detail-wrapper'], 'page-max-width')}>
          <Slider {...SLIDER_CONFIG}>
            {renderImages()}
          </Slider>
          <ProductDetailHeroInfo {...otherProps} />
          <ProductDetailHeroOptions {...otherProps} />
        </div>
      </section>
    )
  } else if (isMediumBreakPoint) {
    return (
      <section className={cx(styles.root, 'page-gutter')}>
        <div className={cx(styles['product-detail-wrapper'], 'page-max-width')}>
          <div className={styles['product-images-container']}>
            {renderImages()}
          </div>
          <div className={styles['product-description']}>
            <ProductDetailHeroInfo {...otherProps} />
            <ProductDetailHeroOptions {...otherProps} />
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className={cx(styles.root, 'page-gutter')}>
        <div className={cx(styles['product-detail-wrapper'], 'page-max-width')}>
          <ProductDetailHeroInfo {...otherProps} />
          <div className={styles['product-images-container']}>
            {renderImages()}
          </div>
          <ProductDetailHeroOptions {...otherProps} />
        </div>
      </section>
    )
  }
}

ProductDetailHero.propTypes = {
  images: array,
  lastBreakPoint: string,
}

ProductDetailHero.defaultProps = {
  images: [],
  lastBreakPoint: ''
}

const mapStateToProps = state => ({
  lastBreakPoint: getLastBreakPoint(state)
})

export default connect(mapStateToProps)(ProductDetailHero);