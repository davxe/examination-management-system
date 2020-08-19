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
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Department - {props.department.length} </h1>
                <Table striped bordered hover responsive>
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
                                        <td> {ele.course.course_name} </td>
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
                <Link className='text-primary' to="/departments/add">Add Department</Link>
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