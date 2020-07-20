import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'

class TeacherForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course:props.teacher ? props.teacher.course:'',
            department:props.teacher ? props.teacher.department:'',
            subject: props.teacher ? props.teacher.subject: '',
            name: props.teacher ? props.teacher.name:'',
            gender:props.teacher ? props.teacher.gender:'',
            dob:props.teacher ? props.teacher.dob:'',
            qualification:props.teacher ? props.teacher.qualification:'',
            experience:props.teacher ? props.teacher.experience:'',
            email:props.teacher ? props.teacher.email:'',
            mobile:props.teacher ? props.teacher.mobile:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            course:this.state.course,
            department: this.state.department,
            subject:this.state.subject,
            name:this.state.name,
            gender:this.state.gender,
            dob:this.state.dob,
            qualification:this.state.qualification,
            experience:this.state.experience,
            email:this.state.email,
            mobile:this.state.mobile,
        }
        this.props.teacher && (formData.id = this.props.teacher._id)
        this.props.handleEditSubmit(formData)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeName=(e)=>{
        const name=e.target.value
        this.setState({
            name
        })
    }

    handleChangeEmail=(e)=>{
        axios.get('https://api.genderize.io/?name='+this.state.name)
        .then(response=>{
            const user=response.data
            this.setState({gender:user.gender})
        })
    }

    handleRadioChange=(gender)=>{
        this.setState({gender})
    }

    render(){
        return(
            <div class="fluid-container" style={{height:"80%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Teacher</h1>
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
                        <Form.Label htmlFor="sname">Subject Name:-</Form.Label>     
                        <Form.Control as='select' name='subject' id='sname' value={this.state.subject} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.subject.map((subject)=>{
                                    return <option value={subject._id} key={subject._id}>{subject.subject_name}</option>
                                })
                            }
                        </Form.Control><br/><br/>
                        <Form.Label htmlFor="name">Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="name"
                            name="name"
                            onBlur={this.handleChangeName}
                        /> <br/><br/>

                        <Form.Label htmlFor="email">Email:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onFocus={this.handleChangeEmail}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label>Gender:-</Form.Label>
                        <Form.Check inline label='Male'
                            type="radio"
                            id="male"
                            name="gender"
                            checked={this.state.gender==='male'}
                            onChange={()=>{this.handleRadioChange('male')}}
                        /> <br/><br/>
                        <Form.Check inline label='Female'
                            type="radio"
                            id="female"
                            name="gender"
                            checked={this.state.gender==='female'}
                            onChange={()=>{this.handleRadioChange('female')}}
                        /> <br/><br/>

                        <Form.Label htmlFor="dob">DOB:-</Form.Label>
                        <Form.Control
                            type="date"
                            id="dob"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="qualification">Qualification:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="qualification"
                            name="qualification"
                            value={this.state.qualification}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="experience">Experience:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="experience"
                            name="experience"
                            value={this.state.experience}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="mobile">Mobile:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={this.state.mobile}
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
        department:state.department,
        subject:state.subject
    }
}
export default connect(mapStateToProps)(TeacherForm)