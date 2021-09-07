import React from 'react';

export default class createElementExample extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello, world`);
  }
}