import React from 'react';
import ChairMap from '../chair_components/chair_map';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chairs, fetchAllChairs, updateFilter } = this.props;

    return (
      <div>
        <FilterForm
          updateFilter={updateFilter}
          />
        <ChairMap
          id='searchMap'
          chairs={chairs}
          updateFilter={updateFilter}
          />
      </div>
    );
  }
}

export default Search;
