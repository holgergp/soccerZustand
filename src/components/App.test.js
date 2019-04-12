import React from 'react';
import './setupEnzymeTests.js';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.index')).toHaveLength(1);
});
