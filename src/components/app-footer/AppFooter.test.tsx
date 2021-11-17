import React from 'react';
import renderer from 'react-test-renderer';

import {AppFooter} from './AppFooter';

it('renders correctly', () => {
  const tree = renderer.create(<AppFooter/>).toJSON();
  expect(tree).toMatchSnapshot();
});