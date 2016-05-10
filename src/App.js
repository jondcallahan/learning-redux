import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return sate
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state

  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(todoApp)

let NextTodoID = 0

class TodoApp extends Component {
  render() {
    return(
      <div>
        <input type="text" ref={ node => {
            this.input = node
          }}/>
        <button onClick={ () => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: NextTodoID++
            })
            this.input.value = ''
          }}>
          Add Todo
        </button>
        <ol>
          {this.props.todos.map( (todo) => {
            return(
                <li
                  key={todo.id}
                  onClick={ () => {
                    store.dispatch({
                      type: 'TOGGLE_TODO',
                      id: todo.id
                    })
                  }}
                  style={{
                    textDecoration:
                      todo.completed ? 'line-through'
                      : 'none'
                  }}
                  >
                  {todo.text}
                </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    /* Since this is run after every update to the store,
    the todos prop will always be up-to-date */
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('app')
  )
}

// Any time the store is updated, the render function re-runs
store.subscribe(render)
render()
