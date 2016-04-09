import React from 'react';
// import { render } from 'react-dom';
const ReactDom = require('react-dom')
import { createStore } from 'redux'

// This is the reducer that manages the actions
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state -1;

    default:
      return state;
  }
}

const store = createStore(counter)

const App = ({value, onIncrement, onDecrement}) => {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontFamily: 'Open Sans', fontWeight: 300, color: '#333', fontSize: 64}}>
          {value}
        </h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }

const render = () => {
  ReactDom.render(
    <App
    value={store.getState()}
    onIncrement={() =>
      store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement={() =>
      store.dispatch({
        type: 'DECREMENT'
      })
    }
    />,
   document.getElementById('app'));
}

store.subscribe(render)
render();
