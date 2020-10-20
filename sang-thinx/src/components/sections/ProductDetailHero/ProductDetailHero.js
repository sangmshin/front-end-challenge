import React from 'react';
import { array, string } from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { openZoom } from 'store/ui/actions';
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

export const ProductDetailHero = ({
  images,
  lastBreakPoint,
  openZoom,
  ...otherProps
}) => {
  const renderImages = () => (
    images && images.map(({ src, alt }, index) => (
      <div className={styles['image-wrapper']} key={index} >
        <img
          src={src}
          alt={alt}
          onClick={() => openZoom(images)}
          role='button'
        />
      </div>
    ))
  );

  const isSmallBreakPoint = /xsmall$/i.test(lastBreakPoint) || /small$/i.test(lastBreakPoint);
  const mobileLayout = (
    <>
      <Slider {...SLIDER_CONFIG}>
        {renderImages()}
      </Slider>
      <ProductDetailHeroInfo {...otherProps} />
      <ProductDetailHeroOptions {...otherProps} />
    </>
  );
  const desktopLayout = (
    <>
      <ProductDetailHeroInfo {...otherProps} />
      <div className={styles['product-images-container']}>
        {renderImages()}
      </div>
      <ProductDetailHeroOptions {...otherProps} />
    </>
  );

  return (
    <section className={cx(styles.root, 'page-gutter')}>
      <div className={cx(styles['product-detail-wrapper'], 'page-max-width')}>
        {isSmallBreakPoint ? mobileLayout : desktopLayout}
      </div>
    </section>
  )
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
});

const mapDispatchToProps = { openZoom };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailHero);