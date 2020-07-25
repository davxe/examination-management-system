import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'

class DepartmentForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            department_name: props.department ? props.department.department_name : '',
            incharge_name: props.department ? props.department.incharge_name:'',
            course:props.department ? props.department.course:'',
            description: props.department ? props.department.description : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            department_name: this.state.department_name,
            incharge_name: this.state.incharge_name,
            course:this.state.course,
            description: this.state.description,
        }
        this.props.department && (formData.id = this.props.department._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="fluid-container" style={{height:"700px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Department</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="cname">Course Name:-</Form.Label>                   
                        <Form.Control as="select" name='course' id='cname' value={this.state.course} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.course.map((course)=>{
                                    return <option value={course._id} key={course._id}>{course.course_name}</option>
                                })
                            }
                        </Form.Control><br/><br/>
                        <Form.Label htmlFor="name">Department Name:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            name="department_name"
                            value={this.state.department_name}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <Form.Label htmlFor="iname">Incharge Name:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="iname"
                            name="incharge_name"
                            value={this.state.incharge_name}
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
        course:state.course
    }
}
export default connect(mapStateToProps)(DepartmentForm)