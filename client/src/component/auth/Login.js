import React from 'react'
import {connect} from 'react-redux'
import { startLoginUser } from '../../actions/userAction'
import img from './img.png'
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { Form,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            showPassword:false,
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleClickShowPassword=()=>{
        this.setState((prevState)=>({showPassword:!prevState.showPassword}))
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const loginData={
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(loginData,redirect))
        // console.log(loginData)
    }
    render()
    {
        return(
            <div className="fluid-container" style={{height:"600px", width: "100%",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
                <div className="row pt-5" style={{height: "400px", width:"100%"}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{backgroundColor: "red",backgroundImage:`linear-gradient(#add8e6,#808080,#90EE90)`}}>
                        <div className="container">
                            <Image src={img} alt="img" height="200px" width="200px" className="mx-auto d-block rounded-circle"></Image>
                            <h1 className="text-center pt-1">LOGIN</h1><br/>
                            <Form onSubmit={this.handleSubmit}>
                                <div className="container form-group">
                                    <Form.Control type="text" name="email" placeholder="Enter Email" className="form-control" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="container form-group">
                                    <Input 
                                        type={this.state.showPassword?"text":"password"} 
                                        name="password" 
                                        placeholder="Enter Password" 
                                        className="form-control" 
                                        value={this.state.password} 
                                        onChange={this.handleChange}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton aria-label='Toggle password visibility' onClick={this.handleClickShowPassword}>
                                                    {this.state.showPassword?(<Visibility/>):(<VisibilityOff/>)}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                                <div className="container form-group">
                                    <Form.Control type="submit" value="Login" className="form-control btn btn-primary"/><br/><br/>
                                    <p>Don't have an account? <Link to='/users/register' className='text-primary'>Register</Link></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default connect()(Login)