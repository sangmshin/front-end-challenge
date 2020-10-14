import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { List } from './List';
import { noop } from 'core/utils';

const props = {
  items: ['New York', 'Canada'],
  onSelectItem: noop,
  selectedItem: 'New York'
}

const component = shallow(<List {...props} />);

describe('Component :: List', () => {
  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#number of items', () => {
    it('should match the number of items with "ListItem" component', () => {
      const numberOfItems = props.items.length;
      expect(component.find('ListItem').length).toBe(numberOfItems);
    });
  });
});
