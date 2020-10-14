import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BestSellers } from './BestSellers';
import { best_sellers } from 'data/pageData.json';

describe('Component :: BestSellers', () => {
  describe('#render', () => {
    const wrapper = shallow(
      <BestSellers {...best_sellers} />
    );
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
