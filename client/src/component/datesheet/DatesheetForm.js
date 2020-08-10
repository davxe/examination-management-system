import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from '../../config/axios'

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
            subject:props.datesheet ? props.datesheet.subject:[],
            subjectnew:[],
            semester:props.datesheet ? props.datesheet.semester:'',
            room:props.datesheet ? props.datesheet.room:'',
            // std:[],
            // student:props.datesheet ? props.datesheet.student:[],
            // studentnew:[],
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
            room:this.state.room,
            student:this.state.student,
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
                // studentnew:this.state.std.filter(student=>student.deptId===e.target.value)
            })
            console.log('subjectnew', this.state.subjectnew) 
        }
        // else if(e.target.name==='semester'){
        //     this.setState((prevState)=>{
        //         return{
        //             subjectnew:prevState.sub.filter(subject=>subject.semId===e.target.value)
        //         }
        //     })
            
        // }
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
                        sem:subject.semester,
                    })
                )
            })
            this.setState({sub})
        })

        // axios.get('/students',{headers:{'x-auth':localStorage.getItem('authToken')}})
        // .then(response=>{
        //     const student = response.data
        //     let std = []
        //     student.map(student=>{
        //         return (
        //             std.push({
        //                 id: student._id,
        //                 value: student._id,
        //                 label: student.name,
        //                 deptId: student.department._id,
        //                 sem:student.semester,
        //             })
        //         )
        //     })
        //     this.setState({std})
        // })
    }

    render(){
        console.log('datesheet',this.props)
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Datesheet</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="container form-group">
                            <Form.Label htmlFor="ename">Exam Name:-</Form.Label>                   
                            <Form.Control as='select' name='exam' id='ename' value={this.state.exam} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                {
                                    this.props.exam.map((exam)=>{
                                        return <option value={exam._id} key={exam._id}>{exam.exam_name}</option>
                                    })
                                }
                            </Form.Control><br/><br/>
                        </div>  

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
                            <Form.Label htmlFor="semester">Semester:-</Form.Label>
                            <Form.Control as='select' name='semester' id='semester' value={this.state.semester} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                {
                                    this.props.semester.map((sem)=>{
                                        return <option value={sem._id} key={sem._id}>{sem.semester}</option>
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
                                        // console.log("subject semester",subject.sem,"semester",this.state.semester)
                                        if(this.state.semester===subject.sem._id){
                                            return <option value={subject.id} key={subject.id}>{subject.label}</option>
                                        }
                                    })
                                }
                            </Form.Control><br/><br/>
                        </div>        

                        <div className="container form-group">
                            <Form.Label htmlFor="room">RoomNo:-</Form.Label>                   
                            <Form.Control as='select' name='room' id='room' value={this.state.room} onChange={this.handleChange}>
                                <option value=''>----select----</option>
                                {
                                    this.props.room.map((room)=>{
                                        return <option value={room._id} key={room._id}>{room.room}</option>
                                    })
                                }
                            </Form.Control><br/><br/>
                        </div>

                        <div className="container form-group">        
                            <Form.Label htmlFor="examDate">Exam Date:-</Form.Label>
                            <Form.Control 
                                type="Date"
                                id="examDate"
                                name="examDate"
                                value={this.state.examDate}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>

                        <div className="container form-group">
                            <Form.Label htmlFor="stime">StartTime:-</Form.Label>
                            <Form.Control
                                type="time"
                                id="stime"
                                name="startTime"
                                value={this.state.startTime}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>

                        <div className="container form-group">
                            <Form.Label htmlFor="endTime">EndTime:-</Form.Label>
                            <Form.Control
                                type="time"
                                id="endTime"
                                name="endTime"
                                value={this.state.endTime}
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
        subject:state.subject,
        exam:state.exam,
        room:state.room,
        student:state.student,
        semester:state.semester
    }
}
export default connect(mapStateToProps)(DatesheetForm)