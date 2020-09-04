import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveDatesheet} from '../../actions/datesheetAction'
import moment from 'moment'
import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function DatesheetList(props){
    //console.log(props.subject)

    const handleRemove = (id) => {
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Successfully Deleted", {	
                    icon: "success",
                });
                props.dispatch(startRemoveDatesheet(id)) 
            } 
        })
        
    }
    const findCourseById=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    const findExamById=(id)=>{
        return props.exam.find(exam=>exam._id===id)
    }
    const findDepartmentById=(id)=>{
        return props.department.find(department=>department._id===id)
    }
    const findSubjectById=(id)=>{
        return props.subject.find(subject=>subject._id===id)
    }
    const findRoomById=(id)=>{
        return props.room.find(room=>room._id===id)
    }
    const findSemesterById=(id)=>{
        return props.semester.find(semester=>semester._id===id)
    }
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Datesheet - {props.datesheet.length} </h1>
                <Table striped bordered hover responsive>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>ExamName</th>
                            <th>CourseName</th>
                            <th>DepartmentName</th>
                            <th>RoomNo.</th>
                            <th>Semester</th>
                            <th>SubjectName</th>
                            <th>ExamDate</th>
                            <th>StartTime</th>
                            <th>EndTime</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.datesheet.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td> {i+1} </td>
                                        <td> {ele.exam.exam_name?ele.exam.exam_name:findExamById(ele.exam).exam_name} </td>
                                        <td> {ele.course.course_name?ele.course.course_name:findCourseById(ele.course).course_name} </td>
                                        <td> {ele.department.department_name?ele.department.department_name:findDepartmentById(ele.department).department_name} </td>
                                        <td> {ele.room.room?ele.room.room:findRoomById(ele.room).room} </td>
                                        <td> {ele.semester.semester?ele.semester.semester:findSemesterById(ele.semester).semester} </td>
                                        <td> {ele.subject.subject_name?ele.subject.subject_name:findSubjectById(ele.subject).subject_name} </td>
                                        <td> {moment(ele.examDate).format('L')} </td>
                                        <td> {ele.startTime} </td>
                                        <td> {ele.endTime} </td>
                                        <td><Link to={`/datesheets/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/datesheets/editdatesheet/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link className='text-primary' to="/datesheets/add">Add Datesheet</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course,
        department:state.department,
        semester:state.semester,
        room:state.room,
        subject:state.subject,
        exam:state.exam,
        datesheet:state.datesheet
    }
}
export default connect(mapStateToProps)(DatesheetList)