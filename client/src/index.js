import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import axios from './config/axios'
import {setUser} from './actions/userAction'
import App from './App'
import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startSetCourses } from './actions/courseAction'
import { startSetDepartments } from './actions/departmentAction'
import { startSetSubjects } from './actions/subjectAction'
import { startSetExams } from './actions/examAction'
import { startSetTeachers } from './actions/teacherAction'
import { startSetStudents } from './actions/studentAction'
import { startSetRooms } from './actions/roomAction'
import { startSetDatesheets } from './actions/datesheetAction'
import { startSetSemesters } from './actions/semesterAction'
const store=configureStore()
// console.log(store.getState())

store.subscribe(()=>{
    // console.log(store.getState())
})

if(localStorage.getItem('authToken'))
  {
    axios.get('/users/accounts',{headers: {'x-auth': localStorage.getItem('authToken')}})
    .then(response=>{
      const user = response.data
      store.dispatch(setUser(user))
      store.dispatch(startSetCourses())
      store.dispatch(startSetDepartments())
      store.dispatch(startSetSubjects())
      store.dispatch(startSetExams())
      store.dispatch(startSetSemesters())
      store.dispatch(startSetTeachers())
      store.dispatch(startSetStudents())
      store.dispatch(startSetRooms())
      store.dispatch(startSetDatesheets())
    })
  }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))