import React from 'react'
import {connect} from 'react-redux'

import SubjectForm from './SubjectForm'
import { startAddSubjects } from '../../actions/subjectAction'

function AddSubject(props){  

    const  handleEditSubmit = (subject) => {    
        const redirect = () => props.history.push('/subjects')
        props.dispatch(startAddSubjects(subject,redirect))
    }
        return (
            <div>
                {/* <h2>Add Subject</h2> */}
                <SubjectForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddSubject)