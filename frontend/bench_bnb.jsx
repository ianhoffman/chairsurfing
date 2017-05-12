import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {clearErrors} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
    delete window.curentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  window.addEventListener('hashchange', () => {
    store.dispatch(clearErrors());
  });

  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});
