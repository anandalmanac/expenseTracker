import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import budgetFormReducer from './store/reducers/Budget';
import todoFormReducer from './store/reducers/Todo';

const combinedReducers=combineReducers({
  budgetFormData:budgetFormReducer,
  todoData:todoFormReducer,
})


const store=createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
 <Provider store={store} >
    <App />
 </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
