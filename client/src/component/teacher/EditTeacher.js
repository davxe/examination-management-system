import React from 'react'
import { connect } from 'react-redux'
import TeacherForm from './TeacherForm'

import {startEditTeacher} from '../../actions/teacherAction'
import { findTeacher } from '../../selectors/teacherSelector'

function EditTeacher(props){

    const handleEditSubmit = (teacher) => {
        const redirect = () => {
            return props.history.push(`/teachers`)
        }
        props.dispatch(startEditTeacher(teacher, redirect))
    }
    return (
        <div>
            
            {props.teacher && (
                <div>
                    {props.teacher.name && <TeacherForm teacher = {props.teacher} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        teacher: findTeacher(state.teacher,id)
    }
}
export default connect(mapStateToProps)(EditTeacher)