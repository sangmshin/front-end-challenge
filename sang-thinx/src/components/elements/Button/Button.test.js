import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button } from './Button';
import { noop } from 'core/utils';

const props = {
  accessibleText: '',
  ariaLabel: 'Add to cart',
  className: '',
  disabled: false,
  onClick: noop,
  role: 'button',
  style: null,
  type: 'submit'
};

describe('Component :: Button', () => {
  
  describe('#render', () => {
    const component = shallow(
      <Button {...props} >
        <div className="child" />
      </Button>
    );
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#accessible text availability', () => {
    const component = shallow(
      <Button {...props} accessibleText='Buy Now'>
        <div className="child" />
      </Button>
    );
    it('should render "accessible text" span element in DOM', () => {
      expect(component.find('span.accessible').length).toBe(1);
    });
  });
});
