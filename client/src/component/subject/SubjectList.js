import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveSubject } from '../../actions/subjectAction'


function SubjectList(props){
    //console.log(props.subject)

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if(confirmRemove){
        props.dispatch(startRemoveSubject(id))
        }
    }
    const findCourse=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    const findDepartment=(id)=>{
        return props.department.find(department=>department._id===id)
    }
    return(
        <div>
            <h1>Subject - {props.subject.length} </h1>
            <table border="1" cellSpacing="0">
                <thead>
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
                                    <td><Link to={`/subjects/${ele._id}`}><button>show</button></Link></td>
                                    <td><Link to={`/subjects/editsubject/${ele._id}`}><button>update</button></Link></td>
                                    <td> <button onClick={ () => handleRemove(ele._id)}>remove</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/subjects/add">Add Subject</Link>
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