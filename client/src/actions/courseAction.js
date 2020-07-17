import axios from 'axios'

export const AddCourses =(course)=>{
    return {type:'ADD_COURSES',payload:course}
}
export const startAddCourses =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/courses',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const course =response.data
                    redirect()
                    dispatch(AddCourses(course))
                }
            })
    }
}

export const setCourses = (course) => {
    return { type: 'SET_COURSES', payload: course }
}

export const startSetCourses = () => {
        return (dispatch) => {
            axios.get('/courses', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const course = response.data
                dispatch(setCourses(course))
            })
        }
}

export const removeCourse = (course) => {
    return { type: 'REMOVE_COURSE', payload: course }
}

export const startRemoveCourse = (id) => {
    return (dispatch) => {
        axios.delete(`/courses/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const course = response.data
            dispatch(removeCourse(course))
        })
    }
}

export const editCourse = (course) => {
    return { type: 'EDIT_COURSE', payload: course }
}

export const startEditCourse = (course, redirect) => {
    return (dispatch) => {
        axios.put(`/courses/${course.id}`, course, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const course = response.data 
                dispatch(editCourse(course))
                redirect()
            }
        })
    }
}