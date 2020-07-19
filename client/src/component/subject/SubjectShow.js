import React from 'react'
import { connect } from 'react-redux'
import { findSubject } from '../../selectors/subjectSelector'

function SubjectShow(props){
    return (
        <div>
            <h1>Subject Show</h1>
            <h2>{props.subject.subject_name} </h2>
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
        subject:findSubject(state.subject,id)
    }
}
export default connect(mapStateToProps)(SubjectShow)