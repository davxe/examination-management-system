import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveSubject } from '../../actions/subjectAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 
function SubjectList(props){
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
                props.dispatch(startRemoveSubject(id)) 
            } 
        })
        
    }
    const findCourseById=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    const findDepartmentById=(id)=>{
        return props.department.find(dept=>dept._id===id)
    }
    const findSemesterById=(id)=>{
        return props.semester.find(semester=>semester._id===id)
    }
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Subject - {props.subject.length} </h1>
                <Table striped bordered hover responsive style={{textAlign:'center'}}>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>CourseName</th>
                            <th>DepartmentName</th>
                            <th>Semester</th>
                            <th>SubjectName</th>
                            <th>Description</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.subject.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td> {i+1} </td>
                                        <td> {ele.course.course_name?ele.course.course_name:findCourseById(ele.course).course_name} </td>
                                        <td> {ele.department.department_name?ele.department.department_name:findDepartmentById(ele.department).department_name} </td>
                                        <td> {ele.semester.semester?ele.semester.semester:findSemesterById(ele.semester).semester} </td>
                                        <td> {ele.subject_name} </td>
                                        <td> {ele.description} </td>
                                        <td><Link to={`/subjects/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/subjects/editsubject/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link className='text-primary' to="/subjects/add">Add Subject</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course,
        department:state.department,
        semester:state.semester,
        subject:state.subject,
    }
}
export default connect(mapStateToProps)(SubjectList)