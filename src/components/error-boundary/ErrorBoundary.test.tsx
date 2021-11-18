import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middlewares = [thunk];

describe('With React Testing Library', () => {
    const props = {
        open: true,
        onClose: function () {
            return false
        },
        id: 1
    }

    const initialState = { output: 10 }
    const mockStore = configureStore(middlewares);

    it('shows modal', () => {
        const state = ErrorBoundary.getDerivedStateFromError();
        expect(state).toEqual({
            hasError: true
        });
    });

    // it('get back button works correctly', () => {
    //     const store = mockStore(initialState);
    //     const utils = render(<Provider store={store}><DeleteMovie open={props.open} onClose={props.onClose} id={props.id} /></Provider>);
    //     const button = utils.getByRole('button')
    //     expect(button).not.toBeNull();
    // });

    // test("Click", () => {
    //     const store = mockStore(initialState);
    //     const utils = render(<Provider store={store}><DeleteMovie open={props.open} onClose={props.onClose} id={props.id} /></Provider>);
    //     const button = utils.getByRole('button')
    //     fireEvent.click(button);
    // });
});