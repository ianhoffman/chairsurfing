import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    const { benches } = this.props;

    const benchItems = Object.keys(benches).map(key => (
      <BenchIndexItem
        key={`bench${key}`}
        bench={benches[key]} />
    ));

    return (
      <ul>
        {benchItems}
      </ul>
    );
  }
}

export default BenchIndex;
