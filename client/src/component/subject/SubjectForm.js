import React from 'react'
import {connect} from 'react-redux'

class SubjectForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course:props.subject ? props.subject.course:'',
            department:props.subject ? props.subject.department:'',
            subject_name: props.subject ? props.subject.subject_name : '',
            semester: props.subject ? props.department.incharge_name:'',
            description: props.subject ? props.subject.description : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            course:this.state.course,
            department: this.state.department,
            subject_name:this.state.subject_name,
            semester:this.state.semester,
            description: this.state.description,
        }
        this.props.subject && (formData.id = this.props.subject._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Add Subject</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cname">Course Name:-</label>                   
                    <select name='course' id='cname' value={this.state.course} onChange={this.handleChange}>
                        <option value=''>----select----</option>
                        {
                            this.props.course.map((course)=>{
                                return <option value={course._id} key={course._id}>{course.course_name}</option>
                            })
                        }
                    </select><br/><br/>
                    <label htmlFor="dname">Department Name:-</label>                   
                    <select name='department' id='dname' value={this.state.department} onChange={this.handleChange}>
                        <option value=''>----select----</option>
                        {
                            this.props.department.map((department)=>{
                                return <option value={department._id} key={department._id}>{department.department_name}</option>
                            })
                        }
                    </select><br/><br/>
                    <label htmlFor="name">Subject Name:-</label>
                    <input 
                        type="text"
                        id="name"
                        name="subject_name"
                        value={this.state.subject_name}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <label htmlFor="semester">Semester:-</label>
                    <input 
                        type="text"
                        id="semester"
                        name="semester"
                        value={this.state.semester}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <label htmlFor="description">description:-</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        course:state.course,
        department:state.department
    }
}
export default connect(mapStateToProps)(SubjectForm)