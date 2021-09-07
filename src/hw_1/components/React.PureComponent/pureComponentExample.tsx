import React from 'react';
import { Link } from 'react-router-dom';

export default class Pure extends React.PureComponent {

    label: string = 'this is pure component';
    score: number = 100500;
    total: number = 200500;

    render() {
        return (
            <div>
                <h6>{this.label}</h6>
                <span>{Math.round(this.score / this.total * 100)}%</span>

                <Link to="/">
                    <button>
                        go back
                    </button>
                </Link>
            </div>
        )
    }

}