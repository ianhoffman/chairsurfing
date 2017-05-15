import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {clearErrors} from './actions/session_actions';

// import { fetchAllBenches, createBench } from './util/benches_api_util';
// window.fetchAllBenches = fetchAllBenches;
// window.createBench = createBench;

import { fetchAllBenches } from './actions/bench_actions';
window.fetchAllBenches = fetchAllBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
    delete window.curentUser;
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');

  window.addEventListener('hashchange', () => {
    store.dispatch(clearErrors());
  });

  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});
