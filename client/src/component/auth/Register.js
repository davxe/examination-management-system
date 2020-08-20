import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'
import img from './img.png'
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
class Register extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            showPassword:false
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
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    render()
    {
        return(
            <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)" }}>
                <div className="row pt-5" style={{height: "400px", width:"100%"}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{backgroundColor: "red",backgroundImage:`linear-gradient(#add8e6,#808080,#90EE90)`}}>
                        <div className="container">
                            <img src={img} alt="img" height="200px" width="200px" className="mx-auto d-block rounded-circle"></img>
                            <h1 className="text-center pt-1">REGISTER</h1><br/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="container form-group">
                                    <input type="text" name="username" placeholder="Enter Username" className="form-control" onChange={this.handleChange} value={this.state.username} />
                                </div>
                                <div className="container form-group">
                                    <input type="text" name="email" placeholder="Enter Email" className="form-control" onChange={this.handleChange} value={this.state.email} />
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
                                    <input type="submit" value="Register" className="form-control btn btn-primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Register)