import React,{useState} from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import PrivateRoute from './component/auth/PrivateRoute'
import {connect} from 'react-redux'

import Home from './component/static/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { startUserLogout } from './actions/userAction'

import CourseList from './component/course/CourseList'
import AddCourse from './component/course/AddCourse'
import CourseShow from './component/course/CourseShow'
import EditCourse from './component/course/EditCourse'

import DepartmentList from './component/department/DepartmentList'
import AddDepartment from './component/department/AddDepartment'
import DepartmentShow from './component/department/DepartmentShow'
import EditDepartment from './component/department/EditDepartment'

import SemesterList from './component/semester/SemesterList'
import AddSemester from './component/semester/AddSemester'
import SemesterShow from './component/semester/SemesterShow'
import EditSemester from './component/semester/EditSemester'

import SubjectList from './component/subject/SubjectList'
import AddSubject from './component/subject/AddSubject'
import SubjectShow from './component/subject/SubjectShow'
import EditSubject from './component/subject/EditSubject'

import ExamList from './component/exam/ExamList'
import AddExam from './component/exam/AddExam'
import ExamShow from './component/exam/ExamShow'
import EditExam from './component/exam/EditExam'

import TeacherList from './component/teacher/TeacherList'
import AddTeacher from './component/teacher/AddTeacher'
import TeacherShow from './component/teacher/TeacherShow'
import EditTeacher from './component/teacher/EditTeacher'

import StudentList from './component/student/StudentList'
import AddStudent from './component/student/AddStudent'
import StudentShow from './component/student/StudentShow'
import EditStudent from './component/student/EditStudent'

import RoomList from './component/room/RoomList'
import AddRoom from './component/room/AddRoom'
import RoomShow from './component/room/RoomShow'
import EditRoom from './component/room/EditRoom'

import DatesheetList from './component/datesheet/DatesheetList'
import AddDatesheet from './component/datesheet/AddDatesheet'
import DatesheetShow from './component/datesheet/DatesheetShow'
import EditDatesheet from './component/datesheet/EditDatesheet'

import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import {Navbar,NavbarBrand,Nav,NavItem, NavbarToggler,Collapse} from 'reactstrap'
function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                { Object.keys(props.user).length!==0?(
                        <div>
                           <Navbar bg='dark' varient="dark" collapseOnSelect expand='lg'>
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Examination Management</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto" >
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    {/* <Nav.Link href={"/admins"} style={{color:'white'}}>Admin</Nav.Link> */}
                                    <Nav.Link href={"/courses"} style={{color:'white'}}>Course</Nav.Link>
                                    <Nav.Link href={"/departments"} style={{color:'white'}}>Department</Nav.Link>
                                    <Nav.Link href={"/semesters"} style={{color:'white'}}>Semester</Nav.Link>
                                    <Nav.Link href={"/subjects"} style={{color:'white'}}>Subject</Nav.Link>
                                    <Nav.Link href={"/teachers"} style={{color:'white'}}>Teacher</Nav.Link>
                                    <Nav.Link href={"/students"} style={{color:'white'}}>Student</Nav.Link>
                                    <Nav.Link href={"/exams"} style={{color:'white'}}>Exam</Nav.Link>
                                    <Nav.Link href={"/rooms"} style={{color:'white'}}>RoomNo</Nav.Link>
                                    <Nav.Link href={"/datesheets"} style={{color:'white'}}>Datesheet</Nav.Link>
                                    {/* <Nav.Link href={"/seatingplans"} style={{color:'white'}}>SeatingPlan</Nav.Link> */}
                                    <Nav.Link to="#" onClick={handleLogout} style={{color:'white'}}>Logout</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    ):(
                        <div>
                           <Navbar bg="dark" variant="dark" collapseOnSelect expand='lg'>
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Examination Management</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                        <Nav.Link href={"/users/register"} style={{color:'white'}}>Register</Nav.Link>
                                        <Nav.Link href={"/users/login"} style={{color:'white'}}>Login</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    )
                }
                
                <Switch>
                <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
                    
                    <PrivateRoute path="/courses" component={CourseList} exact={true} />
                    <PrivateRoute path="/courses/add" component={AddCourse} />
                    <PrivateRoute path="/courses/:id" component={CourseShow} exact={true} />
                    <PrivateRoute path="/courses/editcourse/:id" component={EditCourse} />

                    <PrivateRoute path="/departments" component={DepartmentList} exact={true} />
                    <PrivateRoute path="/departments/add" component={AddDepartment} />
                    <PrivateRoute path="/departments/:id" component={DepartmentShow} exact={true} />
                    <PrivateRoute path="/departments/editdepartment/:id" component={EditDepartment} />

                    <PrivateRoute path="/semesters" component={SemesterList} exact={true} />
                    <PrivateRoute path="/semesters/add" component={AddSemester} />
                    <PrivateRoute path="/semesters/:id" component={SemesterShow} exact={true} />
                    <PrivateRoute path="/semesters/editsemester/:id" component={EditSemester} />

                    <PrivateRoute path="/subjects" component={SubjectList} exact={true} />
                    <PrivateRoute path="/subjects/add" component={AddSubject} />
                    <PrivateRoute path="/subjects/:id" component={SubjectShow} exact={true} />
                    <PrivateRoute path="/subjects/editsubject/:id" component={EditSubject} />

                    <PrivateRoute path="/exams" component={ExamList} exact={true} />
                    <PrivateRoute path="/exams/add" component={AddExam} />
                    <PrivateRoute path="/exams/:id" component={ExamShow} exact={true} />
                    <PrivateRoute path="/exams/editexam/:id" component={EditExam} />

                    <PrivateRoute path="/teachers" component={TeacherList} exact={true} />
                    <PrivateRoute path="/teachers/add" component={AddTeacher} />
                    <PrivateRoute path="/teachers/:id" component={TeacherShow} exact={true} />
                    <PrivateRoute path="/teachers/editteacher/:id" component={EditTeacher} />

                    <PrivateRoute path="/students" component={StudentList} exact={true} />
                    <PrivateRoute path="/students/add" component={AddStudent} />
                    <PrivateRoute path="/students/:id" component={StudentShow} exact={true} />
                    <PrivateRoute path="/students/editstudent/:id" component={EditStudent} />

                    <PrivateRoute path="/rooms" component={RoomList} exact={true} />
                    <PrivateRoute path="/rooms/add" component={AddRoom} />
                    <PrivateRoute path="/rooms/:id" component={RoomShow} exact={true} />
                    <PrivateRoute path="/rooms/editroom/:id" component={EditRoom} />

                    <PrivateRoute path="/datesheets" component={DatesheetList} exact={true} />
                    <PrivateRoute path="/datesheets/add" component={AddDatesheet} />
                    <PrivateRoute path="/datesheets/:id" component={DatesheetShow} exact={true} />
                    <PrivateRoute path="/datesheets/editdatesheet/:id" component={EditDatesheet} />
                </Switch>
            </div> 
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user,
    }
}
export default connect(mapStateToProps)(App)