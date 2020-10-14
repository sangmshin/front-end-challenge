import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ProductCard } from './ProductCard';

const props = {
  product_title: 'title',
  product_subtitle: 'subtitle',
}

describe('Component :: ProductCard', () => {
  
  describe('#render', () => {
    const component = shallow(
      <ProductCard {...props} />
    );
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
