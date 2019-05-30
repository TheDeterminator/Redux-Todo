import {connect} from 'react-redux';
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

const mapStateToProps = state => ({
    todos: state
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)