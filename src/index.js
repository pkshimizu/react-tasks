import React from 'react'
import { render } from 'react-dom'
import TodoList from './containers/TodoList'

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";

import './App.css'

const store = createStore(reducers);


render(
  <Provider store={store}>
    <TodoList/>
  </Provider>,
  document.getElementById('root')
);
