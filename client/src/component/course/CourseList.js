import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveCourse} from '../../actions/courseAction'


function CourseList(props){
    //console.log(props.course)

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if(confirmRemove){
        props.dispatch(startRemoveCourse(id))
        }
    }
    return(
        <div>
            <h1>Courses - {props.course.length} </h1>
            <table border="1" cellSpacing="0">
                <thead>
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
                                    <td><Link to={`/courses/${ele._id}`}><button>show</button></Link></td>
                                    <td><Link to={`/courses/editcourse/${ele._id}`}><button>update</button></Link></td>
                                    <td> <button onClick={ () => handleRemove(ele._id)}>remove</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/courses/add">Add Course</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        course: state.course
    }
}

export default connect(mapStateToProps)(CourseList)