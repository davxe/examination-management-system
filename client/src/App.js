import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

import Home from './component/static/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { startUserLogout } from './actions/userAction'
import {connect} from 'react-redux'

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
                                    <Nav.Link href={"/customer"} style={{color:'white'}}>Admin</Nav.Link>
                                    <Nav.Link href={"/department"} style={{color:'white'}}>Department</Nav.Link>
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