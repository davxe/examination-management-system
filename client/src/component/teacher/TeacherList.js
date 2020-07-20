import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveTeacher } from '../../actions/teacherAction'
import moment from 'moment'
import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function TeacherList(props){
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
                props.dispatch(startRemoveTeacher(id)) 
            } 
        })
        
    }
    const findCourse=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    const findDepartment=(id)=>{
        return props.department.find(department=>department._id===id)
    }
    const findSubject=(id)=>{
        return props.subject.find(subject=>subject._id===id)
    }
    return(
        <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Teacher - {props.teacher.length} </h1>
                <Table striped bordered hover>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>CourseName</th>
                            <th>DepartmentName</th>
                            <th>SubjectName</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.teacher.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td> {i+1} </td>
                                        <td> {findCourse(ele.course)?.course_name} </td>
                                        <td> {findDepartment(ele.department)?.department_name} </td>
                                        <td> {findSubject(ele.subject)?.subject_name} </td>
                                        <td> {ele.name} </td>
                                        <td> {ele.email} </td>
                                        <td> {ele.gender} </td>
                                        <td> {moment(ele.dob).format('L')} </td>
                                        <td><Link to={`/teachers/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/teachers/editteacher/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to="/teachers/add">Add Teacher</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course,
        department:state.department,
        subject:state.subject,
        teacher:state.teacher
    }
}
export default connect(mapStateToProps)(TeacherList)