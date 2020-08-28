import axios from '../config/axios'
import swal from 'sweetalert'
export const AddStudents =(student)=>{
    return {type:'ADD_STUDENTS',payload:student}
}
export const startAddStudents =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/students',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
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
                    const student =response.data
                    redirect()
                    dispatch(AddStudents(student))
                }
            })
    }
}

export const setStudents = (student) => {
    return { type: 'SET_STUDENTS', payload: student }
}

export const startSetStudents = () => {
        return (dispatch) => {
            axios.get('/students', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const student = response.data
                dispatch(setStudents(student))
            })
        }
}

export const removeStudent = (student) => {
    return { type: 'REMOVE_STUDENT', payload: student }
}

export const startRemoveStudent = (id) => {
    return (dispatch) => {
        axios.delete(`/students/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const student = response.data
            dispatch(removeStudent(student))
        })
    }
}

export const editStudent = (student) => {
    return { type: 'EDIT_STUDENT', payload: student }
}

export const startEditStudent = (student, redirect) => {
    return (dispatch) => {
        axios.put(`/students/${student.id}`, student, {headers: {'x-auth': localStorage.getItem('authToken')}})
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
                const student = response.data 
                dispatch(editStudent(student))
                redirect()
            }
        })
    }
}