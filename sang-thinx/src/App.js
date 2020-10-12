import React from 'react';
import 'globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Layout } from 'components/container';
import { ProductDetailTemplate } from 'components/templates';

const App = () => (
  <Layout>
    <ProductDetailTemplate />
  </Layout>
);

export default App;
