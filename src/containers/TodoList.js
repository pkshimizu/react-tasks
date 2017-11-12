import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import actions from '../actions';

export default connect(
  function mapStateToProps(state) {
    return {todos: state.get('todos')};
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: (text) => dispatch(actions.addTodo(text)),
    }
  },
)(TodoList);
