import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findCourse } from '../../selectors/courseSelector'
import { Container } from 'react-bootstrap'

function CourseShow(props){
    return (
        <Container>
            <h1 className='mt-5'>Course Show</h1>
            <h2 className='mt-5'><b>Course Name:-</b>{props.course.course_name} </h2>
            <Link to='/courses'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        course:findCourse(state.course,id)
    }
}
export default connect(mapStateToProps)(CourseShow)