import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
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

import SubjectList from './component/subject/SubjectList'
import AddSubject from './component/subject/AddSubject'
import SubjectShow from './component/subject/SubjectShow'
import EditSubject from './component/subject/EditSubject'

import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                {/* <h2>Task Box</h2> */}
                {
                    Object.keys(props.user).length!==0?(
                        <div>
                           <Navbar bg='dark' varient="dark">
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Examination Management</Navbar.Brand>
                                <Nav className="ml-auto" >
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    <Nav.Link href={"/admins"} style={{color:'white'}}>Admin</Nav.Link>
                                    <Nav.Link href={"/departments"} style={{color:'white'}}>Department</Nav.Link>
                                    <Nav.Link href={"/courses"} style={{color:'white'}}>Course</Nav.Link>
                                    <Nav.Link href={"/subjects"} style={{color:'white'}}>Subject</Nav.Link>
                                    <Nav.Link href={"/teachers"} style={{color:'white'}}>Teacher</Nav.Link>
                                    <Nav.Link href={"/exams"} style={{color:'white'}}>Exam</Nav.Link>
                                    <Nav.Link href={"/datesheets"} style={{color:'white'}}>Datesheet</Nav.Link>
                                    <Nav.Link href={"/students"} style={{color:'white'}}>Student</Nav.Link>
                                    <Nav.Link href={"/rooms"} style={{color:'white'}}>RoomNo</Nav.Link>
                                    <Nav.Link href={"/seatingplans"} style={{color:'white'}}>SeatingPlan</Nav.Link>
                                    <Nav.Link to="#" onClick={handleLogout} style={{color:'white'}}>Logout</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    ):(
                        <div>
                           <Navbar bg="dark" variant="dark" >
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Examination Management</Navbar.Brand>
                                <Nav className="ml-auto">
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    <Nav.Link href={"/users/register"} style={{color:'white'}}>Register</Nav.Link>
                                    <Nav.Link href={"/users/login"} style={{color:'white'}}>Login</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    )
                }
                
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
                    
                    <Route path="/courses" component={CourseList} exact={true} />
                    <Route path="/courses/add" component={AddCourse} />
                    <Route path="/courses/:id" component={CourseShow} exact={true} />
                    <Route path="/courses/editcourse/:id" component={EditCourse} />

                    <Route path="/departments" component={DepartmentList} exact={true} />
                    <Route path="/departments/add" component={AddDepartment} />
                    <Route path="/departments/:id" component={DepartmentShow} exact={true} />
                    <Route path="/departments/editdepartment/:id" component={EditDepartment} />

                    <Route path="/subjects" component={SubjectList} exact={true} />
                    <Route path="/subjects/add" component={AddSubject} />
                    <Route path="/subjects/:id" component={SubjectShow} exact={true} />
                    <Route path="/subjects/editsubject/:id" component={EditSubject} />
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