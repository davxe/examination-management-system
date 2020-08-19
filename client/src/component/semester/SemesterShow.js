import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { findSemester } from '../../selectors/semesterSelector'


function SemesterShow(props){
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Semester Show</h1>
            <h2 className='mt-3'><b>Semester No.:-</b>{(props.semester)?.semester} </h2><br/>
            <Link className='text-primary' to='/semesters'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        semester:findSemester(state.semester,id)
    }
}
export default connect(mapStateToProps)(SemesterShow)