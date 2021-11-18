import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {MoviesContainer} from './MoviesContainer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk'

const middlewares = [thunk];

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
  const mockStore = configureStore(middlewares);

  it('input renders correctly', () => {
    const store = mockStore(initialState);
    const tree = renderer.create(<Provider store={store}><MoviesContainer/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows movies string', () => {
    const store = mockStore(initialState);
    const { getByText } = render(<Provider store={store}><MoviesContainer/></Provider>);
    expect(getByText("movies found")).not.toBeNull();
});

it('shows sortby', () => {
  const store = mockStore(initialState);
  const { getByText } = render(<Provider store={store}><MoviesContainer/></Provider>);
  expect(getByText("sort by")).not.toBeNull();
});
})