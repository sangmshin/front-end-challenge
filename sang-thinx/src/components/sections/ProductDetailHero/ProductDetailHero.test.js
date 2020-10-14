import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ProductDetailHero } from './ProductDetailHero';
import { hero } from 'data/pageData.json';

const wrapper = shallow(
  <ProductDetailHero {...hero} />
);

describe('Component :: ProductDetailHero', () => {
  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
