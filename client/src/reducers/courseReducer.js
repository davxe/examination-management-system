const courseInitialState=[]
const courseReducer =(state=courseInitialState,action)=>{
    switch(action.type){
        case 'SET_COURSES':{
            return [...action.payload]
        }
        case "ADD_COURSES": {
            return [...state, action.payload]
        }
        case 'EDIT_COURSE': {
            return state.map(course => {
                if(course._id === action.payload._id){
                    return Object.assign({}, course, action.payload)
                }
                else{
                    return Object.assign({}, course)
                }
            })
        }
        case 'REMOVE_COURSE': {
            return state.filter(course => {
                return course._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default courseReducer