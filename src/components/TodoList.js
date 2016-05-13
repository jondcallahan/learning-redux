import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  console.log(todos);
  return (
    <ul>
      {todos.map( (todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            />  
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
