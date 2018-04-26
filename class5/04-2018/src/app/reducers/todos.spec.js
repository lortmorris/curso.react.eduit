import { Reducer } from 'redux-testkit';
import reducers from './index';
import { addTodosList, addTodo } from '../actions';

describe('todos reducer and actions', () => {

  it('should have initial state', () => {
    expect(reducers(undefined, {})).toEqual({ todoslist: [] });
  });

  it('test add a todoslist', () => {
    const action = addTodosList('list 1');
    const result = {
      "todoslist": [{"id": 0, "title": "list 1", "todos": []}]
    };

    Reducer(reducers).expect(action).toReturnState(result);
  });

  it('test add todo', () => {
    const result = {
      "todoslist": [{"id": 0, "title": "list 1", "todos": []}]
    };

    Reducer(reducers)
    .expect(addTodo(0, 'task 1'))
    .toReturnState(result);
  });
});
