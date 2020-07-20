import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'

class SubjectForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course:props.subject ? props.subject.course:'',
            department:props.subject ? props.subject.department:'',
            subject_name: props.subject ? props.subject.subject_name : '',
            semester: props.subject ? props.department.semester:'',
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
            <div class="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" white",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Subject</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="cname">Course Name:-</Form.Label>                   
                        <Form.Control as='select' name='course' id='cname' value={this.state.course} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.course.map((course)=>{
                                    return <option value={course._id} key={course._id}>{course.course_name}</option>
                                })
                            }
                        </Form.Control><br/><br/>
                        <Form.Label htmlFor="dname">Department Name:-</Form.Label>                   
                        <Form.Control as='select' name='department' id='dname' value={this.state.department} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.department.map((department)=>{
                                    return <option value={department._id} key={department._id}>{department.department_name}</option>
                                })
                            }
                        </Form.Control><br/><br/>
                        <Form.Label htmlFor="name">Subject Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="name"
                            name="subject_name"
                            value={this.state.subject_name}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <Form.Label htmlFor="semester">Semester:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="semester"
                            name="semester"
                            value={this.state.semester}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <Form.Label htmlFor="description">description:-</Form.Label>
                        <Form.Control as='textarea' rows="3"
                            type="text"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
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