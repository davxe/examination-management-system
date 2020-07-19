import axios from 'axios'

export const AddExams =(exam)=>{
    return {type:'ADD_EXAMS',payload:exam}
}
export const startAddExams =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/exams',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const exam =response.data
                    redirect()
                    dispatch(AddExams(exam))
                }
            })
    }
}

export const setExams = (exam) => {
    return { type: 'SET_EXAMS', payload: exam }
}

export const startSetExams = () => {
        return (dispatch) => {
            axios.get('/exams', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const exam = response.data
                dispatch(setExams(exam))
            })
        }
}
export const removeExam = (exam) => {
    return { type: 'REMOVE_EXAM', payload: exam }
}

export const startRemoveExam = (id) => {
    return (dispatch) => {
        axios.delete(`/exams/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const exam = response.data
            dispatch(removeExam(exam))
        })
    }
}

export const editExam = (exam) => {
    return { type: 'EDIT_EXAM', payload: exam }
}

export const startEditExam = (exam, redirect) => {
    return (dispatch) => {
        axios.put(`/exams/${exam.id}`, exam, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const exam = response.data 
                dispatch(editExam(exam))
                redirect()
            }
        })
    }
}