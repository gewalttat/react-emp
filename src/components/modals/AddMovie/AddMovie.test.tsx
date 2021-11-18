import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddMovie } from './AddMovie';

describe('With React Testing Library', () => {
    const props = {
        open: true,
        onClose: function () {
            this.open = !this.open
        }
    }

    it('shows modal', () => {
        const { getByText } = render(<AddMovie open={props.open} onClose={props.onClose}/>);
        expect(getByText('add movie')).not.toBeNull();
    });

    it('shows title input', () => {
        const elem = render(<AddMovie open={props.open} onClose={props.onClose}/>);
        const input = elem.getByPlaceholderText('Movie name');
        expect(input).not.toBeNull();
    });

    it('shows movie url input', () => {
        const elem = render(<AddMovie open={props.open} onClose={props.onClose}/>);
        const input = elem.getByPlaceholderText('https://');
        expect(input).not.toBeNull();
    });

    it('get back button works correctly', () => {
        const handleClick = jest.fn()
            const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>)
            const button = utils.getAllByRole('button')[0];
            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(0);
        });

        test("Click", () => {
            const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>);
            const button = utils.getAllByRole('button')[0]
            fireEvent.click(button);
        });

        it('shows input changes correctly', () => {
            const setupInput = () => {
              const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>);
              const input = utils.getByPlaceholderText('Movie name');
              return {
                input,
                ...utils,
              }
            }
            const {input} = setupInput();
            fireEvent.change(input, {target: {value: 'Fifty'}});
            expect(input.value).toBe('Fifty');
          })

          it('shows input changes correctly', () => {
            const setupInput = () => {
              const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>);
              const input = utils.getByPlaceholderText('https://');
              return {
                input,
                ...utils,
              }
            }
            const {input} = setupInput();
            fireEvent.change(input, {target: {value: 'Fifty'}});
            expect(input.value).toBe('Fifty');
          })

          it('shows input changes correctly', () => {
            const setupInput = () => {
              const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>);
              const input = utils.getByPlaceholderText('minutes');
              return {
                input,
                ...utils,
              }
            }
            const {input} = setupInput();
            fireEvent.change(input, {target: {value: '1488'}});
            expect(input.value).toBe('1488');
          })

          it('shows input changes correctly', () => {
            const setupInput = () => {
              const utils = render(<AddMovie open={props.open} onClose={props.onClose}/>);
              const input = utils.getByPlaceholderText('7.8');
              return {
                input,
                ...utils,
              }
            }
            const {input} = setupInput();
            fireEvent.change(input, {target: {value: '100500'}});
            expect(input.value).toBe('100500');
          })
});
