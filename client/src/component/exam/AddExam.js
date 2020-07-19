import React from 'react'
import {connect} from 'react-redux'

import ExamForm from './ExamForm'
import { startAddExams } from '../../actions/examAction'

function AddExam(props){  

    const handleEditSubmit = (exam) => {    
        const redirect = () => props.history.push('/exams')
        props.dispatch(startAddExams(exam,redirect))
    }
        return (
            <div>
                {/* <h2>Add Exam</h2> */}
                <ExamForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddExam)