import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditMovie } from './EditMoive';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const props = {
        open: true,
        onClose: function () {
            this.open = !this.open
        },
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

    it('shows modal', () => {
        const store = mockStore(initialState);
        const { getByText } = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
        expect(getByText('edit movie')).not.toBeNull();
    });

    it('shows title input', () => {
        const store = mockStore(initialState);
        const elem = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
        const input = elem.getByDisplayValue('Fifty Shades Freed');
        expect(input).not.toBeNull();
    });

    it('get back button works correctly', () => {
        const handleClick = jest.fn()
        const store = mockStore(initialState);
        const utils = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
        const button = utils.getAllByRole('button')[0];
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it('shows input changes correctly', () => {
        const setupInput = () => {
            const store = mockStore(initialState);
            const utils = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
            const input = utils.getByDisplayValue('Fifty Shades Freed');
            return {
                input,
                ...utils,
            }
        }
        const { input } = setupInput();
        fireEvent.change(input, { target: { value: 'Fifty' } });
        expect(input.value).toBe('Fifty');
    })

    it('shows input changes correctly', () => {
        const setupInput = () => {
            const store = mockStore(initialState);
            const utils = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
            const input = utils.getByDisplayValue('https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg');
            return {
                input,
                ...utils,
            }
        }
        const { input } = setupInput();
        fireEvent.change(input, { target: { value: 'qwe' } });
        expect(input.value).toBe('qwe');
    })

    it('shows input changes correctly', () => {
        const setupInput = () => {
            const store = mockStore(initialState);
            const utils = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
            const input = utils.getByDisplayValue('106');
            return {
                input,
                ...utils,
            }
        }
        const { input } = setupInput();
        fireEvent.change(input, { target: { value: '100' } });
        expect(input.value).toBe('100');
    })

    it('shows input changes correctly', () => {
        const setupInput = () => {
            const store = mockStore(initialState);
            const utils = render(<Provider store={store}><EditMovie open={props.open} onClose={props.onClose} movieData={props.movieData} /></Provider>);
            const input = utils.getByDisplayValue('6.1');
            return {
                input,
                ...utils,
            }
        }
        const { input } = setupInput();
        fireEvent.change(input, { target: { value: '100' } });
        expect(input.value).toBe('100');
    })
});