import React from 'react'
import { connect } from 'react-redux'
import { findDepartment } from '../../selectors/departmentSelector'

function DepartmentShow(props){
    return (
        <div>
            <h1>Department Show</h1>
            <h2>{props.department.department_name} </h2>
            {/* {props.course && (
                <div>
                     
                </div>
            )}
             */}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        department:findDepartment(state.department,id)
    }
}
export default connect(mapStateToProps)(DepartmentShow)