import React from 'react';
import styles from './styles/TopContainer.css';

export default class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.aa}>Article List</h3>
        {this.props.articles.map((v, i) => (
          <p>{v.title} {v.content}</p>
        ))}
      </div>
    );
  }
}
