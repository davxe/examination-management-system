import React from 'react'
import {connect} from 'react-redux'

import SemesterForm from './SemesterForm'
import { startAddSemesters } from '../../actions/semesterAction'

function AddSemester(props){  

    const handleEditSubmit = (semester) => {    
        const redirect = () => props.history.push('/semesters')
        props.dispatch(startAddSemesters(semester,redirect))
    }
        return (
            <div>
                <SemesterForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddSemester)