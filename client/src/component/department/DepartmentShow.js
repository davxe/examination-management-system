import React from 'react'
import { connect } from 'react-redux'
import { findDepartment } from '../../selectors/departmentSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'

function DepartmentShow(props){
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Department Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{(props.department)?.course.course_name} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{(props.department)?.department_name} </h2><br/>
            <Link className='text-primary' to='/departments'>back</Link>
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