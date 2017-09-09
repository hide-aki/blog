import React from 'react';
import HelloWorld from '../components/helloWorld';

export default class Router extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <HelloWorld text={this.props.index} />
      </div>
    );
  }
}
