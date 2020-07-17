import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveDepartment} from '../../actions/departmentAction'


function DepartmentList(props){
    //console.log(props.department)

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if(confirmRemove){
        props.dispatch(startRemoveDepartment(id))
        }
    }
    const findCourse=(id)=>{
        return props.course.find(course=>course._id===id)
    }
    return(
        <div>
            <h1>Department - {props.department.length} </h1>
            <table border="1" cellSpacing="0">
                <thead>
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
                                    <td><Link to={`/departments/${ele._id}`}><button>show</button></Link></td>
                                    <td><Link to={`/departments/editdepartment/${ele._id}`}><button>update</button></Link></td>
                                    <td> <button onClick={ () => handleRemove(ele._id)}>remove</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/departments/add">Add Department</Link>
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