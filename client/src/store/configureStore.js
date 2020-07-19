import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer';
import courseReducer from '../reducers/courseReducer'
import departmentReducer from '../reducers/departmentReducer'
import subjectReducer from '../reducers/subjectReducer'
import examReducer from '../reducers/examReducer';
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            course:courseReducer,
            department:departmentReducer,
            subject:subjectReducer,
            exam:examReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore