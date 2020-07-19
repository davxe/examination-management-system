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
    const findCourse=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    const findDepartment=(id)=>{
        return props.department.find(department=>department._id===id)
    }
    return(
        <div class="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
                <h1 className='mt-5'>Subject - {props.subject.length} </h1>
                <Table striped bordered hover>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>CourseName</th>
                            <th>DepartmentName</th>
                            <th>SubjectName</th>
                            <th>Semester</th>
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
                                        <td> {findCourse(ele.course)?.course_name} </td>
                                        <td> {findDepartment(ele.department)?.department_name} </td>
                                        <td> {ele.subject_name} </td>
                                        <td> {ele.semester} </td>
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
                <Link to="/subjects/add">Add Subject</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course,
        department:state.department,
        subject:state.subject
    }
}
export default connect(mapStateToProps)(SubjectList)