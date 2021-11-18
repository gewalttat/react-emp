import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { MovieData } from './components/movies-container/MoviesContainer';

it('renders correctly', () => {
    const initialState = { movies: [] }
    const mockStore = configureStore();
    const store = mockStore(initialState);
  const tree = renderer.create(<Provider store={store}><App/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});