import React from 'react'
import { connect } from 'react-redux'
import { findSubject } from '../../selectors/subjectSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function SubjectShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='mt-5'>Subject Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{props.course.map(ele=>ele._id===props.subject.course?`${ele.course_name}`:'')} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{props.department.map(ele=>ele._id===props.subject.department?`${ele.department_name}`:'')} </h2>
            <h2 className='mt-3'><b>Subject Name:-</b>{props.subject.subject_name} </h2><br/>
            <Link to='/subjects'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        subject:findSubject(state.subject,id),
        course:state.course,
        department:state.department
    }
}
export default connect(mapStateToProps)(SubjectShow)