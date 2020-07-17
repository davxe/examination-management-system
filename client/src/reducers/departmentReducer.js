const departmentInitialState=[]
const departmentReducer =(state=departmentInitialState,action)=>{
    switch(action.type){
        case 'SET_DEPARTMENTS':{
            return [...action.payload]
        }
        case "ADD_DEPARTMENTS": {
            return [...state, action.payload]
        }
        case 'EDIT_DEPARTMENT': {
            return state.map(dept => {
                if(dept._id === action.payload._id){
                    return Object.assign({}, dept, action.payload)
                }
                else{
                    return Object.assign({}, dept)
                }
            })
        }
        case 'REMOVE_DEPARTMENT': {
            return state.filter(dept => {
                return dept._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default departmentReducer