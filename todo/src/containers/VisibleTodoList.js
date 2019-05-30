import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

const mapStateToProps = state => ({
    todos: state
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)