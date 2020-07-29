import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer';
import courseReducer from '../reducers/courseReducer'
import departmentReducer from '../reducers/departmentReducer'
import subjectReducer from '../reducers/subjectReducer'
import examReducer from '../reducers/examReducer';
import teacherReducer from '../reducers/teacherReducer'
import studentReducer from '../reducers/studentReducer'
import roomReducer from '../reducers/roomReducer'
import datesheetReducer from '../reducers/datesheetReducer';
import semesterReducer from '../reducers/semesterReducer';
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            course:courseReducer,
            department:departmentReducer,
            subject:subjectReducer,
            exam:examReducer,
            semester:semesterReducer,
            teacher:teacherReducer,
            student:studentReducer,
            room:roomReducer,
            datesheet:datesheetReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore