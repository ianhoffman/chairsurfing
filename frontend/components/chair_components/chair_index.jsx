import React from 'react';
import ChairIndexItem from './chair_index_item';

class ChairIndex extends React.Component {
  render() {
    const { chairs } = this.props;

    const chairItems = Object.keys(chairs).map(key => (
      <ChairIndexItem
        key={`chair${key}`}
        chair={chairs[key]} />
    ));

    return (
      <ul>
        {chairItems}
      </ul>
    );
  }
}

export default ChairIndex;
