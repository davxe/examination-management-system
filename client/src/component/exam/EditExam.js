import React from 'react'
import { connect } from 'react-redux'
import ExamForm from './ExamForm'

import {startEditExam} from '../../actions/examAction'
import { findExam } from '../../selectors/examSelector'

function EditExam(props){

    const handleEditSubmit = (exam) => {
        const redirect = () => {
            return props.history.push(`/exams`)
        }
        props.dispatch(startEditExam(exam, redirect))
    }
    return (
        <div>
            
            {props.exam && (
                <div>
                    {props.exam.exam_name && <ExamForm exam = {props.exam} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        exam: findExam(state.exam,id)
    }
}
export default connect(mapStateToProps)(EditExam)
