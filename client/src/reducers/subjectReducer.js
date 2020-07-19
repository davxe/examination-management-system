const subjectInitialState=[]
const subjectReducer =(state=subjectInitialState,action)=>{
    switch(action.type){
        case 'SET_SUBJECTS':{
            return [...action.payload]
        }
        case "ADD_SUBJECTS": {
            return [...state, action.payload]
        }
        case 'EDIT_SUBJECT': {
            return state.map(subject => {
                if(subject._id === action.payload._id){
                    return Object.assign({}, subject, action.payload)
                }
                else{
                    return Object.assign({}, subject)
                }
            })
        }
        case 'REMOVE_SUBJECT': {
            return state.filter(subject => {
                return subject._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default subjectReducer