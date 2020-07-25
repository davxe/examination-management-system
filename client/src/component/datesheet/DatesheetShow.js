import React from 'react'
import { connect } from 'react-redux'
import { findDatesheet} from '../../selectors/datesheetSelector'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function DatesheetShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Datesheet Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{props.datesheet.course.course_name} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{props.datesheet.department.department_name} </h2>
            <h2 className='mt-3'><b>Subject Name:-</b>{props.datesheet.subject.subject_name} </h2>
            <h2 className='mt-3'><b>Exam Name:-</b>{props.datesheet.exam.exam_name}</h2>
            <Link to='/datesheets'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        datesheet:findDatesheet(state.datesheet,id),
        course:state.course,
        department:state.department,
        subject:state.subject,
        exam:state.exam
    }
}
export default connect(mapStateToProps)(DatesheetShow)