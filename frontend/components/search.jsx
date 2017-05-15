import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, fetchAllBenches, updateBounds}) => (
  <div>
    <BenchMap
      benches={benches}
      updateBounds={updateBounds} />
    <BenchIndex
      benches={benches}
      fetchAllBenches={fetchAllBenches} />
  </div>
);

export default Search;
