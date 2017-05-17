import React from 'react';
import ChairMap from './chair_map';
import ChairIndex from './chair_index';
import FilterForm from './filter_form';
import ChairShowContainer from './chair_show_container';
import { Link } from 'react-router-dom';

const Search = ({chairs, fetchAllChairs, updateFilter}) => (
  <main>

    <div id='heroContainer'>
      <img id='bannerImg' src="/assets/hero-img.png" />
      <div id='bannerContainer'>
        <h1 id='banner'>Find Your Perfect Chair</h1>
        <h2 id='subHeader'>SF real estate is heating up. Just sleep in these chairs.</h2>
        <Link to='/login' className='demo'>Demo Log In</Link>
      </div>
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
