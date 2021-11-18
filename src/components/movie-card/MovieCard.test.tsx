import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MovieCard } from './MovieCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('With React Testing Library', () => {
    const props = {
        movieData: {
            budget: 55000000,
            genres: [''],
            id: 337167,
            overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
            poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
            release_date: "2018-02-07",
            revenue: 136906000,
            runtime: 106,
            tagline: "Don't miss the climax",
            title: "Fifty Shades Freed",
            vote_average: 6.1,
            vote_count: 1195
        }
    }

    const initialState = { output: 10 }
    const mockStore = configureStore();

    it('shows movie card', () => {
        const store = mockStore(initialState);
        const { getByText } = render(<Provider store={store}><MovieCard movieData={props.movieData} /></Provider>);
        expect(getByText("Fifty Shades Freed")).not.toBeNull();
    });

    it('renders correctly', () => {
        const store = mockStore(initialState);
        const tree = renderer.create(<Provider store={store}><MovieCard movieData={props.movieData} /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});