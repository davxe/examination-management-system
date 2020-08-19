import React from 'react'
import { connect } from 'react-redux'
import { findDatesheet} from '../../selectors/datesheetSelector'
import {Link} from 'react-router-dom'
import { Container,Table,Button } from 'react-bootstrap'
import moment from 'moment'
import axios from '../../config/axios'
function DatesheetShow(props){
    console.log(props)
    // const datesheet
    const handleSend=(student)=>{
        let recipent=student.mobile
        let textmessage=`Hi ${student.roll}/${student.name} 
        the datesheet for your exam - ${props.datesheet.exam.exam_name}
        room no - ${props.datesheet.room.room} 
        course - ${props.datesheet.course.course_name} department - ${props.datesheet.department.department_name}
        semester-${props.datesheet.semester.semester} subject - ${props.datesheet.subject.subject_name}
        date - ${moment(props.datesheet.examDate).format('L')} 
        and time from - ${props.datesheet.startTime} to - ${props.datesheet.endTime}
        be ready for the exam 
        wish you all the best 
        (if already send please ignore )`
        console.log("to",recipent)
        console.log("message",textmessage)
        axios.post(`/datesheets/send?recipent=${recipent}&textmessage=${textmessage}`)
        .catch(err=>console.error(err))
        .then(response=>console.log(response.data))
    }
    return (
        <Container>
            <h1 className='pt-5 pb-2'>Datesheet Show</h1>
            <h2 className='mt-3'><b>Course Name:-</b>{(props.datesheet)?.course.course_name} </h2>
            <h2 className='mt-3'><b>Department Name:-</b>{(props.datesheet)?.department.department_name} </h2>
            <h2 className='mt-3'><b>Subject Name:-</b>{(props.datesheet)?.subject.subject_name} </h2>
            <h2 className='mt-3'><b>Exam Name:-</b>{(props.datesheet)?.exam.exam_name}</h2>
            <h2 className='mt-3'><b>Semester:-</b>{(props.datesheet)?.semester.semester}</h2>
            <div>
                {
                    <Table striped bordered hover responsive>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>RollNo:-</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
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
                                if(((ele)?.semester.semester===(props.datesheet)?.semester.semester) && ((ele)?.department.department_name===(props.datesheet)?.department.department_name)){
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td> {ele.roll} </td>
                                            <td> {ele.name} </td>
                                            <td> {ele.email} </td>
                                            <td> {ele.department.department_name} </td>
                                            <td> {ele.semester.semester} </td>
                                            <td> {ele.gender} </td>
                                            <td> {moment(ele.dob).format('L')} </td>
                                            <td> {ele.mobile} </td>
                                            <td><Button onClick={ () => handleSend(ele)} className='btn btn-info'>send</Button></td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table>
                }
            </div>
            <Link className='text-primary' to='/datesheets'>back</Link>
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