import React from 'react'
import {Container, Form} from 'react-bootstrap'
class CourseForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course_name: props.course ? props.course.course_name : '',
            description: props.course ? props.course.description : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            course_name: this.state.course_name,
            description: this.state.description,
        }
        this.props.course && (formData.id = this.props.course._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div class="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
                <Container >
                    <h1 className='mt-5'>Add Course</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="name">CourseName:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="name"
                            name="course_name"
                            placeholder='enter course name'
                            value={this.state.course_name}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="description">description:-</Form.Label>
                        <Form.Control as='textarea' rows='3'
                            type="text"
                            id="description"
                            name="description"
                            placeholder='enter course description'
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
export default CourseForm