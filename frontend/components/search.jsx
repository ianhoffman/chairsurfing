import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

const Search = ({benches, fetchAllBenches, updateFilter}) => (
  <div>
    <FilterForm
      updateFilter={updateFilter} />
    <BenchMap
      benches={benches}
      updateFilter={updateFilter} />
    <BenchIndex
      benches={benches}
      fetchAllBenches={fetchAllBenches} />
  </div>
);

export default Search;
