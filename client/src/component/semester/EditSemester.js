import React from 'react'
import { connect } from 'react-redux'
import SemesterForm from './SemesterForm'

import {startEditSemester} from '../../actions/semesterAction'
import { findSemester } from '../../selectors/semesterSelector'

function EditSemester(props){

    const handleEditSubmit = (semester) => {
        const redirect = () => {
            return props.history.push(`/semesters`)
        }
        props.dispatch(startEditSemester(semester, redirect))
    }
    return (
        <div>
            
            {props.semester && (
                <div>
                    {props.semester.semester && <SemesterForm semester = {props.semester} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        semester: findSemester(state.semester,id)
    }
}
export default connect(mapStateToProps)(EditSemester)