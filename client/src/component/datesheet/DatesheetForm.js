import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'

class DatesheetForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            exam:props.datesheet ? props.datesheet.exam:'',
            course:props.datesheet ? props.datesheet.course:'',
            dept:[],
            department:props.datesheet ? props.datesheet.department:[],
            departmentnew:[],
            dub:[],
            subject: props.datesheet ? props.datesheet.subject:[],
            subjectnew:[],
            semester: props.datesheet ? props.datesheet.semester:'',
            examDate:props.datesheet ? props.datesheet.examDate:'',
            startTime:props.datesheet ? props.datesheet.startTime:'',
            endTime:props.datesheet ? props.datesheet.endTime:'',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            exam:this.state.exam,
            course:this.state.course,
            department: this.state.department,
            subject:this.state.subject,
            semester:this.state.semester,
            examDate:this.state.examDate,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
        }
        this.props.datesheet && (formData.id = this.props.datesheet._id)
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
            <div className="fluid-container" style={{height:"80%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Datesheet</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="ename">Exam Name:-</Form.Label>                   
                        <Form.Control as='select' name='exam' id='ename' value={this.state.exam} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.props.exam.map((exam)=>{
                                    return <option value={exam._id} key={exam._id}>{exam.exam_name}</option>
                                })
                            }
                        </Form.Control><br/><br/>

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

                        <Form.Label htmlFor="sname">Subject Name:-</Form.Label>     
                        <Form.Control as='select' name='subject' id='sname' value={this.state.subject} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.state.subjectnew.map((subject)=>{
                                    return <option value={subject.id} key={subject.id}>{subject.label}</option>
                                })
                            }
                        </Form.Control><br/><br/>

                        <Form.Label htmlFor="semester">Semester:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="semester"
                            name="semester"
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="examDate">Exam Date:-</Form.Label>
                        <Form.Control 
                            type="Date"
                            id="examDate"
                            name="examDate"
                            value={this.state.examDate}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="stime">StartTime:-</Form.Label>
                        <Form.Control
                            type="time"
                            id="stime"
                            name="startTime"
                            value={this.state.startTime}
                            onChange={this.handleChange}
                        /> <br/><br/>

                        <Form.Label htmlFor="endTime">EndTime:-</Form.Label>
                        <Form.Control
                            type="time"
                            id="endTime"
                            name="endTime"
                            value={this.state.endTime}
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
        subject:state.subject,
        exam:state.exam
    }
}
export default connect(mapStateToProps)(DatesheetForm)