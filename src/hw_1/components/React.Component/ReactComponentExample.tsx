import React from 'react';
import { Link } from 'react-router-dom';

export default class ReactComponentExample extends React.Component<{}, { count: number }>  {

    constructor(props: number) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `counter: ${this.state.count}`;
    }
    componentDidUpdate() {
        document.title = `counter: ${this.state.count}`;
    }

    render() {
        return (
            <div>
                <p>counter: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    click to increase count
                </button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    click me to decrease cout
                </button>
                <Link to="/">
                <button>
                    go back
                </button>
            </Link>
            </div>
        );
    }
}