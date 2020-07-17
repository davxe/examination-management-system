import React from 'react'
import {connect} from 'react-redux'

import CourseForm from './CourseForm'
import { startAddCourses } from '../../actions/courseAction'

function AddCourse(props){  

    const  handleEditSubmit = (course) => {    
        const redirect = () => props.history.push('/courses')
        props.dispatch(startAddCourses(course,redirect))
    }
        return (
            <div>
                {/* <h2>Add Course</h2> */}
                <CourseForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddCourse)
