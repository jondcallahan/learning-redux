import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Footer from './components/Footer'

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

const GetVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( t =>
        t.completed
      )
    case 'SHOW_ACTIVE':
      return todos.filter( t =>
        !t.completed
      )
  }
}

let NextTodoID = 0

const TodoApp = ({todos, visibilityFilter}) => {
  return(
    <div>
      <AddTodo
        onAddClick= {(text) => {
        store.dispatch({
          type: 'ADD_TODO',
          text,
          id: NextTodoID++
        })
        }}/>
      <TodoList
        todos={GetVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        }}
        />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={ (filter) => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }}
        />
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    /* Since this is run after every update to the store,
    the todos prop will always be up-to-date */
    <TodoApp
      {...store.getState()}
      />,
    document.getElementById('app')
  )
}

// Any time the store is updated, the render function re-runs
store.subscribe(render)
render()
