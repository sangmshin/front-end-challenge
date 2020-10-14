import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DropdownButton } from './DropdownButton';
import { noop } from 'core/utils';

const wrapper = shallow(
  <DropdownButton onClick={noop} type='age' selectedItem='xsmall' />
)

describe('Component :: DropdownButton', () => {
  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
