import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link } from './Link';

describe('Component :: Link', () => {
  describe('#render', () => {
    const component = shallow(
      <Link>
        <p>shethinx.com</p>
      </Link>
    )
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
