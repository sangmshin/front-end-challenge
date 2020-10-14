import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Layout } from './Layout';
import { noop } from 'core/utils';

const props = {
  getPageData: noop,
  setLastBreakPoint: noop,
}

describe('Component :: Layout', () => {
  const wrapper = shallow(
    <Layout {...props} >
      <div className="child" />
    </Layout>
  );

  describe('#render', () => {
    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
