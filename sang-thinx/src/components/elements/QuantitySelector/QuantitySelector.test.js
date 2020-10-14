import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { QuantitySelector } from './QuantitySelector';

const MAX_QUANTITY = 99;

describe('Component :: QuantitySelector', () => {
  
  describe('#render', () => {
    const component = shallow(
      <QuantitySelector />
    );
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#max prop', () => {
    const component = shallow(
      <QuantitySelector max={MAX_QUANTITY} />
    );
    it('should have input element that has max-length attribute', () => {
      expect(component.find('input').prop('maxLength')).toBe(MAX_QUANTITY);
    });
  });
});
