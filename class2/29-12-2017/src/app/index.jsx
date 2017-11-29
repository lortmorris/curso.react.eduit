import { createStore } from 'redux';

import { ADD_NEW_TODOS_LIST } from './actions';

const reducer = (state = 0 , action = {}) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;

    default: return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.info('changed: ', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
