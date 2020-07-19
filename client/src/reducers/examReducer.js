const examInitialState=[]
const examReducer =(state=examInitialState,action)=>{
    switch(action.type){
        case 'SET_EXAMS':{
            return [...action.payload]
        }
        case "ADD_EXAMS": {
            return [...state, action.payload]
        }
        case 'EDIT_EXAM': {
            return state.map(exam => {
                if(exam._id === action.payload._id){
                    return Object.assign({}, exam, action.payload)
                }
                else{
                    return Object.assign({}, exam)
                }
            })
        }
        case 'REMOVE_EXAM': {
            return state.filter(exam => {
                return exam._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default examReducer