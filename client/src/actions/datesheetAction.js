import axios from '../config/axios'
import swal from 'sweetalert'
export const AddDatesheets =(datesheet)=>{
    return {type:'ADD_DATESHEETS',payload:datesheet}
}
export const startAddDatesheets =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/datesheets',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    swal({
                        icon:'info',
                        title:'Validation faled',
                        text: `${response.data.message}`,
                      });
                }
                else{
                    swal({
                        title: "Good job!",
                        text: "added successfully",
                        icon: "success",
                      });
                    const datesheet =response.data
                    redirect()
                    dispatch(AddDatesheets(datesheet))
                }
            })
    }
}

export const setDatesheets = (datesheet) => {
    return { type: 'SET_DATESHEETS', payload: datesheet }
}

export const startSetDatesheets = () => {
        return (dispatch) => {
            axios.get('/datesheets', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const datesheet = response.data
                dispatch(setDatesheets(datesheet))
            })
        }
}
export const removeDatesheet = (datesheet) => {
    return { type: 'REMOVE_DATESHEET', payload: datesheet }
}

export const startRemoveDatesheet = (id) => {
    return (dispatch) => {
        axios.delete(`/datesheets/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const datesheet = response.data
            dispatch(removeDatesheet(datesheet))
        })
    }
}

export const editDatesheet = (datesheet) => {
    return { type: 'EDIT_DATESHEET', payload: datesheet }
}

export const startEditDatesheet = (datesheet, redirect) => {
    return (dispatch) => {
        axios.put(`/datesheets/${datesheet.id}`, datesheet, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.message}`,
                  });
            }
            else{
                swal({
                    title: "Good job!",
                    text: "updated successfully",
                    icon: "success",
                  });
                const datesheet = response.data 
                dispatch(editDatesheet(datesheet))
                redirect()
            }
        })
    }
}