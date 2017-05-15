import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, fetchAllBenches}) => (
  <div>
    <BenchMap 
      benches={benches} />
    <BenchIndex
      benches={benches}
      fetchAllBenches={fetchAllBenches} />
  </div>
);

export default Search;
