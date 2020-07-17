import React from 'react'
import { connect } from 'react-redux'
import { findCourse } from '../../selectors/courseSelector'

function CourseShow(props){
    return (
        <div>
            <h1>Customer Show</h1>
            <h2>{props.course.course_name} </h2>
            {/* {props.course && (
                <div>
                     
                </div>
            )}
             */}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        course:findCourse(state.course,id)
    }
}
export default connect(mapStateToProps)(CourseShow)