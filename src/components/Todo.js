import React, { PropTypes } from 'react'

const Todo = ({onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration:
          completed ? 'line-through'
          : 'none'
      }}
      >
      {text}
    </li>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Todo
