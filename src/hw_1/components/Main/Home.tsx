import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export const Home: React.FC = () => {
    return (
        <div className='buttons-wrapper'>
            <Link to="/reactComponent">
                <button>
                    switch to React.Component example
                </button>
            </Link>

            <Link to="/funcComponent">
                <button>
                    switch to React.FC example
                </button>
            </Link>

            <Link to="/pureComponent">
                <button>
                    switch to React.PureComponent example
                </button>
            </Link>

            <Link to="/createElement">
                <button>
                    switch to React.CreateElement example
                </button>
            </Link>
        </div>
    )
}