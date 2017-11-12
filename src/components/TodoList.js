import React, { Component } from 'react';
import TodoItem from '../containers/TodoItem'

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;

    const onSubmit = (event) => {
      const input = event.target;
      const text = input.value;
      const isEnterKey = (event.which === 13);
      const isLongEnough = text.length > 0;

      if(isEnterKey && isLongEnough) {
        input.value = '';
        this.props.addTodo(text);
      }
    };

    return (
      <div className='todo'>
        <input
          type='text'
          placeholder='Add todo'
          onKeyDown={onSubmit}
        />
        <ul className='todo__list'>
          {todos.map(todo => {
            return (
              <TodoItem key={todo.getId()} todo={todo} />
            )
          })}
        </ul>
      </div>
    );
  }
}