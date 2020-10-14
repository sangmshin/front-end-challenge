import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ProductDetailTemplate } from './ProductDetailTemplate';
import pageData from 'data/pageData.json';

const wrapper = shallow(
  <ProductDetailTemplate pageData={pageData} />
);

describe('Component :: ProductDetailTemplate', () => {
  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
