import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'

class TeacherForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course:props.teacher ? props.teacher.course:'',
            dept:[],
            department:props.teacher ? props.teacher.department:[],
            departmentnew:[],
            sub:[],
            subject: props.teacher ? props.teacher.subject:[],
            subjectnew:[],
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
        if(e.target.name === 'course'){
            this.setState({
                departmentnew:this.state.dept.filter(department=>department.courseId === e.target.value ),
            })
            console.log('departmentnew', this.state.departmentnew)
        }
        else if(e.target.name==='department'){
            this.setState({
                subjectnew:this.state.sub.filter(subject=>subject.deptId === e.target.value ),
            })
            console.log('subjectnew', this.state.subjectnew) 
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

        axios.get('/subjects',{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then(response=>{
            const subject = response.data
            let sub = []
            subject.map(subject=>{
                return (
                    sub.push({
                        id: subject._id,
                        value: subject._id,
                        label: subject.subject_name,
                        deptId: subject.department._id,
                    })
                )
            })
            this.setState({sub})
        })
    }

    render(){
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Teacher</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="container form-group">
                            <Form.Label htmlFor="cname">Course Name:-</Form.Label>                   
                            <Form.Control as='select' name='course' id='cname' value={this.state.course} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                {
                                    this.props.course.map((course)=>{
                                        return <option value={course._id} key={course._id}>{course.course_name}</option>
                                    })
                                }
                            </Form.Control><br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="dname">Department Name:-</Form.Label>                   
                            <Form.Control as='select' name='department' id='dname' value={this.state.department} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                    {
                                        this.state.departmentnew.map((department)=>{
                                            return <option value={department.id} key={department.id}>{department.label}</option>
                                        })
                                    }
                            </Form.Control><br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="sname">Subject Name:-</Form.Label>     
                            <Form.Control as='select' name='subject' id='sname' value={this.state.subject} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                {
                                    this.state.subjectnew.map((subject)=>{
                                        return <option value={subject.id} key={subject.id}>{subject.label}</option>
                                    })
                                }
                            </Form.Control><br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="name">Name:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                onBlur={this.handleChangeName}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="email">Email:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onFocus={this.handleChangeEmail}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <div className='container gender'>
                                <Form.Label>Gender:-</Form.Label>
                                <Form.Check inline label='Male'
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    checked={this.state.gender==='male'}
                                    onChange={()=>{this.handleRadioChange('male')}}
                                />
                            </div>
                            <div className='container gender'>
                                <Form.Check inline label='Female'
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    checked={this.state.gender==='female'}
                                    onChange={()=>{this.handleRadioChange('female')}}
                                /> <br/><br/>
                            </div>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="dob">DOB:-</Form.Label>
                            <Form.Control
                                type="date"
                                id="dob"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="qualification">Qualification:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="qualification"
                                name="qualification"
                                value={this.state.qualification}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="experience">Experience:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="experience"
                                name="experience"
                                value={this.state.experience}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="mobile">Mobile:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <input type="submit" value="Submit" className='btn btn-secondary'/>
                        </div>
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