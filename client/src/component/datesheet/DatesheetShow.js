import React from 'react'
import { connect } from 'react-redux'
import { findDatesheet} from '../../selectors/datesheetSelector'
import {Link} from 'react-router-dom'
import { Container,Table,Button } from 'react-bootstrap'
import moment from 'moment'
function DatesheetShow(props){
    console.log(props)
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Datesheet Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{props.datesheet.course.course_name} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{props.datesheet.department.department_name} </h2>
            <h2 className='mt-3'><b>Subject Name:-</b>{props.datesheet.subject.subject_name} </h2>
            <h2 className='mt-3'><b>Exam Name:-</b>{props.datesheet.exam.exam_name}</h2>
            <h2 className='mt-3'><b>Semester:-</b>{props.datesheet.semester.semester}</h2>
            <div>
                {
                    <Table striped bordered hover responsive>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>RollNo:-</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Semester</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>Send datesheet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.student.map((ele,i) => {
                                if(ele.semester.semester===props.datesheet.semester.semester){
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td> {ele.roll} </td>
                                            <td> {ele.name} </td>
                                            <td> {ele.email} </td>
                                            <td> {ele.semester.semester} </td>
                                            <td> {ele.gender} </td>
                                            <td> {moment(ele.dob).format('L')} </td>
                                            <td> {ele.mobile} </td>
                                            <td><Button className='btn btn-info'>send</Button></td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
                }
            </div>
            <Link to='/datesheets'>back</Link>
        </Container>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        datesheet:findDatesheet(state.datesheet,id),
        student:state.student
    }
}
export default connect(mapStateToProps)(DatesheetShow)