import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Zoom } from './Zoom';
import { noop } from 'core/utils';
import { hero } from 'data/pageData.json';

const props = {
  blockScroll: noop,
  closeZoom: noop,
  images: hero.images,
  isZoomOpen: true
}

describe('Component :: Zoom', () => {
  describe('#render', () => {
    const component = shallow(
      <Zoom {...props} />
    );
    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('#isZoomOpen prop', () => {
    const component = shallow(
      <Zoom {...props} isZoomOpen={false} />
    );
    it('should not render anything when isZoomOpen prop from redux is set to false', () => {
      expect(component.getElement()).toBe(null);
    });
  });

  describe('#click in the option', () => {
    const spy = jest.fn();
    const component = shallow(
      <Zoom {...props} closeZoom={spy} />
    );
    it('should executes the onSelect', () => {
      component.find('ForwardRef').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
