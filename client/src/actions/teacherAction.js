import axios from '../config/axios'
import swal from 'sweetalert'
export const AddTeachers =(teacher)=>{
    return {type:'ADD_TEACHERS',payload:teacher}
}
export const startAddTeachers =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/teachers',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
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
                    const teacher =response.data
                    redirect()
                    dispatch(AddTeachers(teacher))
                }
            })
    }
}

export const setTeachers = (teacher) => {
    return { type: 'SET_TEACHERS', payload: teacher }
}

export const startSetTeachers = () => {
        return (dispatch) => {
            axios.get('/teachers', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const teacher = response.data
                dispatch(setTeachers(teacher))
            })
        }
}

export const removeTeacher = (teacher) => {
    return { type: 'REMOVE_TEACHER', payload: teacher }
}

export const startRemoveTeacher = (id) => {
    return (dispatch) => {
        axios.delete(`/teachers/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const teacher = response.data
            dispatch(removeTeacher(teacher))
        })
    }
}

export const editTeacher = (teacher) => {
    return { type: 'EDIT_TEACHER', payload: teacher }
}

export const startEditTeacher = (teacher, redirect) => {
    return (dispatch) => {
        axios.put(`/teachers/${teacher.id}`, teacher, {headers: {'x-auth': localStorage.getItem('authToken')}})
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
                const teacher = response.data 
                dispatch(editTeacher(teacher))
                redirect()
            }
        })
    }
}