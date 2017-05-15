import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllBenches();
  }

  render() {
    const benches = Object.keys(this.props.benches).map(key => (
      <BenchIndexItem
        key={`bench${key}`}
        bench={this.props.benches[key]} />
    ));

    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
