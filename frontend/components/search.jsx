import React from 'react';
import ChairMap from './chair_map';
import ChairIndex from './chair_index';
import FilterForm from './filter_form';
import ChairShowContainer from './chair_show_container';

const Search = ({chairs, fetchAllChairs, updateFilter}) => (
  <div>
    <FilterForm
      updateFilter={updateFilter} />
    <ChairMap
      chairs={chairs}
      updateFilter={updateFilter} />
    <ChairIndex
      chairs={chairs}
      fetchAllChairs={fetchAllChairs} />
  </div>
);

export default Search;
