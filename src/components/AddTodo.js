import React, { PropTypes } from 'react'

const AddTodo = ({onAddClick}) => {
  let input;
  return (
    <div>
      <input type="text" ref={ node => {
          input = node
        }}/>
      <button
        className="btn-primary btn m-x-2"
        onClick={ () => {
          onAddClick(input.value)
          input.value = ''
        }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
}

export default AddTodo
