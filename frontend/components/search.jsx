import React from 'react';
import ChairMap from './chair_map';
import ChairIndex from './chair_index';
import FilterForm from './filter_form';
import ChairShowContainer from './chair_show_container';

const Search = ({chairs, fetchAllChairs, updateFilter}) => (
  <main>
    <img id='bannerImg' src="https://wallpaperlayer.com/img/2015/8/leather-chair-wallpaper-8869-9199-hd-wallpapers.jpg" />
    <div id='bannerContainer'>
      <h1 id='banner'>Find Your Perfect Chair</h1>
      <h2 id='subHeader'>SF real estate is heating up. But these chairs are comfier than any bed.</h2>
    </div>

    <FilterForm
      updateFilter={updateFilter} />
    <ChairMap
      chairs={chairs}
      updateFilter={updateFilter} />
    <ChairIndex
      chairs={chairs}
      fetchAllChairs={fetchAllChairs} />
  </main>
);

export default Search;
