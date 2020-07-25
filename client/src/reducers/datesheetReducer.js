const datesheetInitialState=[]
const datesheetReducer =(state=datesheetInitialState,action)=>{
    switch(action.type){
        case 'SET_DATESHEETS':{
            return [...action.payload]
        }
        case "ADD_DATESHEETS": {
            return [...state, action.payload]
        }
        case 'EDIT_DATESHEET': {
            return state.map(datesheet => {
                if(datesheet._id === action.payload._id){
                    return Object.assign({}, datesheet, action.payload)
                }
                else{
                    return Object.assign({}, datesheet)
                }
            })
        }
        case 'REMOVE_DATESHEET': {
            return state.filter(datesheet => {
                return datesheet._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default datesheetReducer