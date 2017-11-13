import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import actions from '../actions';

export default connect(
  function mapStateToProps(state) {
    return {todos: state.todo.get('todos')};
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: (text) => dispatch(actions.addTodo(text)),
    }
  },
)(TodoList);
