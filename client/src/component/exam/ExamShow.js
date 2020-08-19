import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { findExam } from '../../selectors/examSelector'


function ExamShow(props){
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Exam Show</h1>
            <h2 className='mt-3'><b>Exam Name:-</b>{(props.exam)?.exam_name} </h2><br/>
            <Link className='text-primary' to='/exams'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        exam:findExam(state.exam,id)
    }
}
export default connect(mapStateToProps)(ExamShow)