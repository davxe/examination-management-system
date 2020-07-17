import axios from 'axios'

export const AddDepartments =(department)=>{
    return {type:'ADD_DEPARTMENTS',payload:department}
}
export const startAddDepartments =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const deprtment =response.data
                    redirect()
                    dispatch(AddDepartments(deprtment))
                }
            })
    }
}

export const setDepartments = (department) => {
    return { type: 'SET_DEPARTMENTS', payload: department }
}

export const startSetDepartments = () => {
        return (dispatch) => {
            axios.get('/departments', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const department = response.data
                dispatch(setDepartments(department))
            })
        }
}
export const removeDepartment = (department) => {
    return { type: 'REMOVE_DEPARTMENT', payload: department }
}

export const startRemoveDepartment = (id) => {
    return (dispatch) => {
        axios.delete(`/departments/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const department = response.data
            dispatch(removeDepartment(department))
        })
    }
}

export const editDepartment = (department) => {
    return { type: 'EDIT_DEPARTMENT', payload: department }
}

export const startEditDepartment = (department, redirect) => {
    return (dispatch) => {
        axios.put(`/departments/${department.id}`, department, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const department = response.data 
                dispatch(editDepartment(department))
                redirect()
            }
        })
    }
}