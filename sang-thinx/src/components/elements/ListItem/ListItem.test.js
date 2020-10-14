import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ListItem } from './ListItem';
import { noop } from 'core/utils';

const props = {
  item: 'Banana',
  onSelect: noop,
  selectedItem: 'Strawberry'
}

describe('Component :: ListItem', () => {
  describe('#render', () => {
    const component = shallow(
      <ListItem {...props} />
    );
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#selectedItem', () => {
    const component = shallow(
      <ListItem {...props} selectedItem='Banana' />
    );
    it('should attach "selected" style when "selectedItem" prop match "item" prop', () => {
      expect(component.find('ForwardRef').prop('className')).toBe('item selected');
    });
  });

  describe('#click in the option', () => {
    const spy = jest.fn();
    const component = shallow(
      <ListItem {...props} onSelect={spy} />
    );
    it('should executes the onSelect', () => {
      component.find('ForwardRef').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
