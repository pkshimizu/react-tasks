import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem';
import actions from '../actions';

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
    }
  }
)(TodoItem);
