import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    const toggleClick = id => event => this.props.toggleTodo(id);

    let classeNames = '';
    if (todo.isDone()) {
      classeNames = 'todo__done';
    }
    return (
      <li
        key={todo.getId()}
        className={classeNames}
        onClick={toggleClick(todo.getId())}
      >
        <span>{todo.getText()}</span>
      </li>
    )
  }
}