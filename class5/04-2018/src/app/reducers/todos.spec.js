import { Reducer } from 'redux-testkit';
import reducers from './index';
import actions from '../actions';

describe('todos reducer and actions', () => {

  it('should have initial state', () => {
    expect(reducers(undefined, {})).toEqual({ list: [] });
  });

  it('test add a todoslist', () => {
    const action = actions.addTodoList('list 1');
    const result = {

    };
    Reducer(reduces).expect(action).toReturnState(result);
  });
});
