import React from 'react';
import { render } from 'react-dom';
import { default as  Store } from './reducers';

import Layout from './containers/layout.jsx';


const App = ({store})=> (
  <Layout store={store} title='Todos App' />
)

const appRender = store => {
  render(<App store={store} />, document.getElementById('app'));
}


Store.subscribe(()=> {
  appRender(Store);
});

Store.dispatch({
  type: 'INIT_APP'  
});
