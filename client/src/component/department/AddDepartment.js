import React from 'react'
import {connect} from 'react-redux'

import DepartmentForm from './DepartmentForm'
import { startAddDepartments } from '../../actions/departmentAction'

function AddDepartment(props){  

    const handleEditSubmit = (department) => {    
        const redirect = () => props.history.push('/departments')
        props.dispatch(startAddDepartments(department,redirect))
    }
        return (
            <div>
                {/* <h2>Add Department</h2> */}
                <DepartmentForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddDepartment)
