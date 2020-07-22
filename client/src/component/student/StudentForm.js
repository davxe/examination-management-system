import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'

class TeacherForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course:props.student ? props.student.course:'',
            dept:[],
            department:props.student ? props.student.department:[],
            departmentnew:[],
            semester: props.student ? props.student.semester: '',
            name: props.student ? props.student.name:'',
            fathers_name: props.student ? props.student.fathers_name:'',
            gender:props.student ? props.student.gender:'',
            dob:props.student ? props.student.dob:'',
            address:props.student ? props.student.address:'',
            parents_mobile:props.student ? props.student.parents_mobile:'',
            email:props.student ? props.student.email:'',
            mobile:props.student ? props.student.mobile:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            course:this.state.course,
            department: this.state.department,
            semester:this.state.semester,
            name:this.state.name,
            fathers_name:this.state.fathers_name,
            gender:this.state.gender,
            dob:this.state.dob,
            address:this.state.address,
            parents_mobile:this.state.parents_mobile,
            email:this.state.email,
            mobile:this.state.mobile,
        }
        this.props.student && (formData.id = this.props.student._id)
        this.props.handleEditSubmit(formData)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name === 'course'){
            this.setState({
                departmentnew:this.state.dept.filter(department=>department.courseId === e.target.value ),
            })
            console.log('departmentnew', this.state.departmentnew)
        }
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

    componentDidMount(){
        axios.get('/departments',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then(response=>{
            const department = response.data
            let dept = []
            department.map(department=>{
                return (
                    dept.push({
                        id: department._id,
                        value: department._id,
                        label: department.department_name,
                        courseId: department.course._id,
                    })
                )
            })
            this.setState({dept})
        })
    }

    render(){
        return(
            <div class="fluid-container" style={{height:"80%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Student</h1>
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
                                this.state.departmentnew.map((department)=>{
                                    return <option value={department.id} key={department.id}>{department.label}</option>
                                })
                            }
                        </Form.Control><br/><br/>

                        <Form.Label htmlFor="semester">Semester:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="semester"
                            name="semester"
                            value={this.state.semester}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        
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
                        />
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

                        <Form.Label htmlFor="fathers_name">FathersName:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="fathers_name"
                            name="fathers_name"
                            value={this.state.fathers_name}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="address">Address:-</Form.Label>
                        <Form.Control as='textarea' rows='3'
                            type="text"
                            id="address"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="parents_mobile">ParentsMobile:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="parents_mobile"
                            name="parents_mobile"
                            value={this.state.parents_mobile}
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
    }
}
export default connect(mapStateToProps)(TeacherForm)