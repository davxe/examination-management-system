import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveCourse} from '../../actions/courseAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 
function CourseList(props){
    //console.log(props.course)

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
                props.dispatch(startRemoveCourse(id)) 
            } 
        })
    }
    return(
        <div class="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
            <h1 className='mt-5'>Courses - {props.course.length} </h1>
            <Table striped bordered hover>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>CourseName</th>
                        <th>Description</th>
                        <th>Show</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.course.map((ele,i) => {
                            return (
                                <tr key={ele._id}>
                                    <td> {i+1} </td>
                                    <td> {ele.course_name} </td>
                                    <td> {ele.description} </td>
                                    <td><Link to={`/courses/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                    <td><Link to={`/courses/editcourse/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                    <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link to="/courses/add">Add Course</Link>
        </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course
    }
}

export default connect(mapStateToProps)(CourseList)