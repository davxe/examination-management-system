import React from 'react'
import { connect } from 'react-redux'
import DepartmentForm from './DepartmentForm'

import {startEditDepartment} from '../../actions/departmentAction'
import { findDepartment } from '../../selectors/departmentSelector'

function EditDepartment(props){

    const handleEditSubmit = (department) => {
        const redirect = () => {
            return props.history.push(`/departments`)
        }
        props.dispatch(startEditDepartment(department, redirect))
    }
    return (
        <div>
            
            {props.department && (
                <div>
                    {props.department.department_name && <DepartmentForm department = {props.department} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        department: findDepartment(state.department,id)
    }
}
export default connect(mapStateToProps)(EditDepartment)