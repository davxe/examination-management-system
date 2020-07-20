import React from 'react'
import { connect } from 'react-redux'
import { findTeacher } from '../../selectors/teacherSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function TeacherShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Teacher Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{props.course.map(ele=>ele._id===props.teacher.course?`${ele.course_name}`:'')} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{props.department.map(ele=>ele._id===props.teacher.department?`${ele.department_name}`:'')} </h2>
            <h2 className='mt-3'><b>Subject Name:-</b>{props.subject.map(ele=>ele._id===props.teacher.subject?`${ele.subject_name}`:'')} </h2>
            <h2 className='mt-3'><b>Teacher Name:-</b>{props.teacher.name} </h2>
            <h2 className='mt-3'><b>Qualification:-</b>{props.teacher.qualification} </h2>
            <h2 className='mt-3'><b>Experience:-</b>{props.teacher.experience}</h2>
            <Link to='/teachers'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        teacher:findTeacher(state.teacher,id),
        course:state.course,
        department:state.department,
        subject:state.subject
    }
}
export default connect(mapStateToProps)(TeacherShow)