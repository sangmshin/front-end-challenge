import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ColorSelector } from './ColorSelector';
import { COLOR_HEXCODE_MAP } from 'core/constants';

const availableColors = Object.keys(COLOR_HEXCODE_MAP);

describe('Component :: ColorSelector', () => {
  const component = shallow(
    <ColorSelector colors={availableColors} />
  );

  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
