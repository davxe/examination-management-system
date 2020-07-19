import axios from 'axios'

export const AddSubjects =(subject)=>{
    return {type:'ADD_SUBJECTS',payload:subject}
}
export const startAddSubjects =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/subjects',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const subject =response.data
                    redirect()
                    dispatch(AddSubjects(subject))
                }
            })
    }
}

export const setSubjects = (subject) => {
    return { type: 'SET_SUBJECTS', payload: subject }
}

export const startSetSubjects = () => {
        return (dispatch) => {
            axios.get('/subjects', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const subject = response.data
                dispatch(setSubjects(subject))
            })
        }
}

export const removeSubject = (subject) => {
    return { type: 'REMOVE_SUBJECT', payload: subject }
}

export const startRemoveSubject = (id) => {
    return (dispatch) => {
        axios.delete(`/subjects/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const subject = response.data
            dispatch(removeSubject(subject))
        })
    }
}

export const editSubject = (subject) => {
    return { type: 'EDIT_SUBJECT', payload: subject }
}

export const startEditSubject = (subject, redirect) => {
    return (dispatch) => {
        axios.put(`/subjects/${subject.id}`, subject, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const subject = response.data 
                dispatch(editSubject(subject))
                redirect()
            }
        })
    }
}