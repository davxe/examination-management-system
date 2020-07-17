import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer';
import courseReducer from '../reducers/courseReducer'
import departmentReducer from '../reducers/departmentReducer'
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            course:courseReducer,
            department:departmentReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore