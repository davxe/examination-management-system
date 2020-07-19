import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import { startRemoveExam} from '../../actions/examAction'

import swal from 'sweetalert'
import { Container, Table, Button } from 'react-bootstrap' 

function ExamList(props){
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
                props.dispatch(startRemoveExam(id)) 
            } 
        })
    }
    return(
        <div class="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
                <h1 className='mt-5'>Exam - {props.exam.length} </h1>
                <Table striped bordered hover>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>ExamName</th>
                            <th>ExamYear</th>
                            <th>ExamType</th>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.exam.map((ele,i) => {
                                return (
                                    <tr key={ele._id}>
                                        <td> {i+1} </td>
                                        <td> {ele.exam_name} </td>
                                        <td> {moment(ele.exam_year).format('YYYY')} </td>
                                        <td> {ele.exam_type} </td>
                                        <td><Link to={`/exams/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                        <td><Link to={`/exams/editexam/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                        <td> <Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to="/exams/add">Add Exam</Link>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        exam:state.exam
    }
}
export default connect(mapStateToProps)(ExamList)