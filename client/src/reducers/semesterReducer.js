const semesterInitialState=[]
const semesterReducer =(state=semesterInitialState,action)=>{
    switch(action.type){
        case 'SET_SEMESTERS':{
            return [...action.payload]
        }
        case "ADD_SEMESTERS": {
            return [...state, action.payload]
        }
        case 'EDIT_SEMESTER': {
            return state.map(semester => {
                if(semester._id === action.payload._id){
                    return Object.assign({}, semester, action.payload)
                }
                else{
                    return Object.assign({}, semester)
                }
            })
        }
        case 'REMOVE_SEMESTER': {
            return state.filter(semester => {
                return semester._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default semesterReducer