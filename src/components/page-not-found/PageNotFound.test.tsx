import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {PageNotFound} from './PageNotFound';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('With React Testing Library', () => {
  it('input renders correctly', () => {
    const tree = renderer.create(<PageNotFound/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});