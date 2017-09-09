import React from 'react';

export default class Router extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.articles.map((v, i) => (
          <p>{v.title}</p>
        ))}
      </div>
    );
  }
}
