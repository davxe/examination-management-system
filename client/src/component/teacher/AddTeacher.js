import React from 'react'
import {connect} from 'react-redux'

import TeacherForm from './TeacherForm'
import { startAddTeachers } from '../../actions/teacherAction'

function AddTeacher(props){  

    const  handleEditSubmit = (teacher) => {    
        const redirect = () => props.history.push('/teachers')
        props.dispatch(startAddTeachers(teacher,redirect))
    }
        return (
            <div>
                <TeacherForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddTeacher)