import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveDepartment} from '../../actions/departmentAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function DepartmentList(props){
    //console.log(props.department)

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
                props.dispatch(startRemoveDepartment(id)) 
            } 
        })
    }
    const findCourse=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    return(
        <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
                <h1 className='mt-5'>Department - {props.department.length} </h1>
                <Table striped bordered hover>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>CourseName</th>
                            <th>DepartmentName</th>
                            <th>InchargeName</th>
                            <th>Description</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.department.map((ele,i) => {
                                return (
                                    <tr key={i}>
                                        <td> {i+1} </td>
                                        <td> {findCourse(ele.course)?.course_name} </td>
                                        <td> {ele.department_name} </td>
                                        <td> {ele.incharge_name} </td>
                                        <td> {ele.description} </td>
                                        <td><Link to={`/departments/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/departments/editdepartment/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to="/departments/add">Add Department</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course,
        department:state.department,
    }
}
export default connect(mapStateToProps)(DepartmentList)