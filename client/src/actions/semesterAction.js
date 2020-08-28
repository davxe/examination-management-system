import axios from '../config/axios'
import swal from 'sweetalert'
export const AddSemesters =(semester)=>{
    return {type:'ADD_SEMESTERS',payload:semester}
}
export const startAddSemesters =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/semesters',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
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
                        text: "added successfully",
                        icon: "success",
                      });
                    const semester =response.data
                    redirect()
                    dispatch(AddSemesters(semester))
                }
            })
    }
}

export const setSemesters = (semester) => {
    return { type: 'SET_SEMESTERS', payload: semester }
}

export const startSetSemesters = () => {
        return (dispatch) => {
            axios.get('/semesters', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const semester = response.data
                dispatch(setSemesters(semester))
            })
        }
}

export const removeSemester = (semester) => {
    return { type: 'REMOVE_SEMESTER', payload: semester }
}

export const startRemoveSemester = (id) => {
    return (dispatch) => {
        axios.delete(`/semesters/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const semester = response.data
            dispatch(removeSemester(semester))
        })
    }
}

export const editSemester = (semester) => {
    return { type: 'EDIT_SEMESTER', payload: semester }
}

export const startEditSemester = (semester, redirect) => {
    return (dispatch) => {
        axios.put(`/semesters/${semester.id}`, semester, {headers: {'x-auth': localStorage.getItem('authToken')}})
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
                    text: "updated successfully",
                    icon: "success",
                  });
                const semester = response.data 
                dispatch(editSemester(semester))
                redirect()
            }
        })
    }
}