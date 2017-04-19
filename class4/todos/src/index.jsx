import React from 'react';
import { render } from 'react-dom';
import Reducers from './reducers';
import { createStore } from 'redux';
import Layout from './containers/layout.jsx';
const Store =  createStore(Reducers);

const App = ({store})=> (
  <Layout store={store} title='Todos App' />
)

const appRender = store => {
  render(<App store={store} />, document.getElementById('app'));
}

Store.subscribe(()=> {
  console.log('State changed: ', Store.getState());
  appRender(Store);
});
