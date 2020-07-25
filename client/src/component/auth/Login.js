import React from 'react'
import {connect} from 'react-redux'
import { startLoginUser } from '../../actions/userAction'
import img from './img.png'
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
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
        console.log(loginData)
    }
    render()
    {
        return(
            <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
                <div className="row pt-5" style={{height: "400px", width:"100%"}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{backgroundColor: "red",backgroundImage:`linear-gradient(#add8e6,#808080,#90EE90)`}}>
                        <div className="container">
                            <img src={img} alt="img" height="200px" width="200px" className="mx-auto d-block rounded-circle"></img>
                            <h1 className="text-center pt-1">LOGIN</h1><br/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="container form-group">
                                    <input type="text" name="email" placeholder="Enter Email" className="form-control" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="container form-group">
                                    <input type="password" name="password" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className="container form-group">
                                    <input type="checkbox"/> Remember me <br/><br/>
                                    <input type="submit" value="Login" className="form-control btn btn-primary"/>
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

export default connect()(Login)