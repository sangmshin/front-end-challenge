import React from 'react';
import { Layout } from 'components/container';
import { ProductDetailTemplate } from 'components/templates';
import 'globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => (
  <Layout>
    <ProductDetailTemplate />
  </Layout>
);

export default App;
