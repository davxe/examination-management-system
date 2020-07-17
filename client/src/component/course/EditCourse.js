import React from 'react'
import { connect } from 'react-redux'
import CourseForm from './CourseForm'

import {startEditCourse} from '../../actions/courseAction'
import { findCourse } from '../../selectors/courseSelector'

function EditCourse(props){

    const handleEditSubmit = (course) => {
        const redirect = () => {
            return props.history.push(`/courses`)
        }
        props.dispatch(startEditCourse(course, redirect))
    }
    return (
        <div>
            
            {props.course && (
                <div>
                    {props.course.course_name && <CourseForm course = {props.course} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        course: findCourse(state.course,id)
    }
}
export default connect(mapStateToProps)(EditCourse)