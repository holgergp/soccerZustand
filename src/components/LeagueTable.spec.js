import React from 'react';
import { mount } from 'enzyme';
import './setupEnzymeTests';
import LeagueTable from './LeagueTable';
import Team from './Team';
import './localstorageMock';

describe('League Table should', () => {
  it('render 18 clubs', () => {
    const wrapper = mount(<LeagueTable />);
    expect(wrapper.find(Team)).toHaveLength(18);
  });
});
