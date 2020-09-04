import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findCourse } from '../../selectors/courseSelector'
import { Container } from 'react-bootstrap'

function CourseShow(props){
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Room Show</h1>
            <h2 className='mt-3'><b>Room No.:-</b>{(props.course)?.course_name} </h2><br/>
            <Link className='text-primary' to='/rooms'>back</Link>
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