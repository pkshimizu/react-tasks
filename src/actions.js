import { Todo } from "./models";

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

const uid = () => Math.random().toString(34).slice(2);

export default {
  addTodo: (text) => {
    return {
      type: actionTypes.ADD_TODO,
      todo: new Todo({
        id: uid(),
        isDone: false,
        text: text,
      }),
    }
  },
  toggleTodo: (id) => {
    return {
      type: actionTypes.TOGGLE_TODO,
      id
    }
  },
}
