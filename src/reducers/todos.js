import { List, Map } from 'immutable'
import { actionTypes } from '../actions';

const initState = Map({
  todos: List([])
});

export default function(state = initState, action) {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return state.set('todos', state.get('todos').push(action.todo));
    case actionTypes.TOGGLE_TODO:
      return state.set('todos', state.get('todos').map(todo => {
        if(todo.get('id') === action.id) {
          return todo.toggleDone();
        } else {
          return todo;
        }
      }));
    default:
      return state;
  }
}