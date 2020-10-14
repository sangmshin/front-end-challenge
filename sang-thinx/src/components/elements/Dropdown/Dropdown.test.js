import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Dropdown } from './Dropdown';

const props = {
  items: [
    'New York',
    'Los Angeles',
    'Chicago'
  ],
  type: 'City'
};

const component = shallow(<Dropdown {...props} />);

describe('Component :: Dropdown', () => {
  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#prop availability: type', () => {
    it('should have 1 "DropdownButton" component and it should have correct "type" prop', () => {
      const DROPDOWN_TYPE = props.type;
      expect(component.find('DropdownButton').length).toBe(1);
      expect(component.find('DropdownButton').prop('type')).toBe(DROPDOWN_TYPE);
    });
  });
});
