import React from 'react'
import { connect } from 'react-redux'
import { findDepartment } from '../../selectors/departmentSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'

function DepartmentShow(props){
    return (
        <Container>
            <h1 className='mt-5'>Department Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{props.course.map(ele=>ele._id===props.department.course?`${ele.course_name}`:'')} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{props.department.department_name} </h2><br/>
            <Link to='/departments'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        course:state.course,
        department:findDepartment(state.department,id),
    }
}
export default connect(mapStateToProps)(DepartmentShow)