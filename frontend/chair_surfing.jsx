import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {clearErrors} from './actions/session_actions';
import Modal from 'react-modal';

// import { fetchAllChairs, createChair } from './util/chairs_api_util';
// window.fetchAllChairs = fetchAllChairs;
// window.createChair = createChair;
//
// import { fetchAllChairs } from './actions/chair_actions';
// window.fetchAllChairs = fetchAllChairs;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
    delete window.curentUser;
  } else {
    store = configureStore();
  }
  // window.store = store;

  const root = document.getElementById('root');

  window.addEventListener('hashchange', () => {
    store.dispatch(clearErrors());
  });

  Modal.setAppElement(document.body);

  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});
