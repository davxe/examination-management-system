import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveSemester} from '../../actions/semesterAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function SemesterList(props){
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
                props.dispatch(startRemoveSemester(id)) 
            } 
        })
    }
    return(
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
            <Container>
                <h1 className='pt-5 pb-2'>Semester - {props.semester.length} </h1>
                <Table striped bordered hover responsive style={{textAlign:'center'}}>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Semester No.</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.semester.map((ele,i) => {
                                return (
                                    <tr key={ele._id}>
                                        <td> {i+1} </td>
                                        <td> {ele.semester} </td>
                                        <td><Link to={`/semesters/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/semesters/editsemester/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link className='text-primary' to="/semesters/add">Add Semester</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        semester:state.semester
    }
}
export default connect(mapStateToProps)(SemesterList)