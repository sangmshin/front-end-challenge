import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DropdownButton } from './DropdownButton';
import { noop } from 'core/utils';

const SELECTED_COUNTRY = 'United State';

describe('Component :: DropdownButton', () => {
  describe('#render', () => {
    const component = shallow(
      <DropdownButton onClick={noop} type='Country' />
    )
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#selectedItem prop', () => {
    const component = shallow(
      <DropdownButton
        onClick={noop}
        type='Country'
        selectedItem={SELECTED_COUNTRY}
      />
    )
    it('should render selectedItem prop in the button', () => {
      expect(component.find('ForwardRef').text()).toBe(SELECTED_COUNTRY);
    });
  });
});
