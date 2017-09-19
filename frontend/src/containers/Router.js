import React from 'react';
import TopContainer from './TopContainer/TopContainer';

export default class Router extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopContainer articles={this.props.articles} />
      </div>
    );
  }
}
