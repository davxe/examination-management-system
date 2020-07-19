import React from 'react'
import { connect } from 'react-redux'
import SubjectForm from './SubjectForm'

import {startEditSubject} from '../../actions/subjectAction'
import { findSubject } from '../../selectors/subjectSelector'

function EditSubject(props){

    const handleEditSubmit = (subject) => {
        const redirect = () => {
            return props.history.push(`/subjects`)
        }
        props.dispatch(startEditSubject(subject, redirect))
    }
    return (
        <div>
            
            {props.subject && (
                <div>
                    {props.subject.subject_name && <SubjectForm subject = {props.subject} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        subject: findSubject(state.subject,id)
    }
}
export default connect(mapStateToProps)(EditSubject)