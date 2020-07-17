import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startSetCourses } from './actions/courseAction'
import { startSetDepartments } from './actions/departmentAction'
const store=configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken'))
  {
    store.dispatch(startGetUser())
    store.dispatch(startSetCourses())
    store.dispatch(startSetDepartments())
  }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))