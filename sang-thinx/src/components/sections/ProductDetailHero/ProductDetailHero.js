import React from 'react';
import Slider from 'react-slick';
import ProductDetailHeroDesc from './ProductDetailHeroDesc';
import styles from './ProductDetailHero.module.scss';

const ProductDetailHero = ({
  images,
  ...otherProps
}) => {
  const renderSlides = () => (
    images.map(({ src, alt }, index) => (
      <img src={src} alt={alt} key={index} />
    ))
  );
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className={styles.root}>
      {images &&
        <Slider {...config}>
          {renderSlides()}
        </Slider>
      }
      <ProductDetailHeroDesc {...otherProps} />
    </section>
  )
}

export default ProductDetailHero;