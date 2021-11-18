import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {SearchInput} from './SearchInput';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore = configureStore();

  it('input renders correctly', () => {
    const store = mockStore(initialState);
    const tree = renderer.create(<Provider store={store}><SearchInput/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows find your movie', () => {
    const store = mockStore(initialState);
    const {getByText} = render(<Provider store={store}><SearchInput/></Provider>);
    expect(getByText('find your movie')).not.toBeNull();
  });

  it('shows search button', () => {
    const store = mockStore(initialState);
    const {getByText} = render(<Provider store={store}><SearchInput/></Provider>);
    expect(getByText('search')).not.toBeNull();
  });

  it('shows input changes correctly', () => {
    const store = mockStore(initialState);
    const setupInput = () => {
      const utils = render(<Provider store={store}><SearchInput/></Provider>)
      const input = utils.getByPlaceholderText('What do you want to watch?');
      return {
        input,
        ...utils,
      }
    }
    const {input} = setupInput();
    fireEvent.change(input, {target: {value: 'Fifty'}});
    expect(input.value).toBe('Fifty');
  })
})