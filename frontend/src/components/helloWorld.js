import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}, World!</h1>
      </div>
    );
  }
}
