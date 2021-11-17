import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {MoviesContainer} from './MoviesContainer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history'

const mockUseLocationValue = {
    pathname: "/testroute",
    search: '',
    hash: '',
    state: null
}
jest.mock('react-router', () => ({
    ...jest.requireActual("react-router") as Record<string, never>,
    useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue;
    })
}));

describe('With React Testing Library', () => {
  const initialState = {movies: []}
  const mockStore = configureStore();

  it('input renders correctly', () => {
    const store = mockStore(initialState);
    const tree = renderer.create(<Provider store={store}><MoviesContainer/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})