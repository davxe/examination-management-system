import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'
import img from './img.png'
class Register extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
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
            <div class="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)" }}>
                <div class="row pt-5" style={{height: "400px", width:"100%"}}>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4" style={{backgroundColor: "red",backgroundImage:`linear-gradient(#add8e6,#808080,#90EE90)`}}>
                        <div class="container">
                            <img src={img} alt="img" height="200px" width="200px" class="mx-auto d-block rounded-circle"></img>
                            <h1 class="text-center pt-1">REGISTER</h1><br/>
                            <form onSubmit={this.handleSubmit}>
                                <div class="container form-group">
                                    <input type="text" name="username" placeholder="Enter Username" class="form-control" onChange={this.handleChange} value={this.state.username} />
                                </div>
                                <div class="container form-group">
                                    <input type="text" name="email" placeholder="Enter Email" class="form-control" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div class="container form-group">
                                    <input type="password" name="password" placeholder="Enter Password" class="form-control" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div class="container form-group">
                                    <input type="submit" value="Register" class="form-control btn btn-primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
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