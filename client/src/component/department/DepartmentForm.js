import React from 'react'
import {connect} from 'react-redux'

class DepartmentForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            department_name: props.department ? props.department.department_name : '',
            incharge_name: props.department ? props.department.incharge_name:'',
            course:props.department ? props.department.course:'',
            description: props.course ? props.course.description : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            department_name: this.state.department_name,
            incharge_name: this.state.incharge_name,
            course:this.state.course,
            description: this.state.description,
        }
        this.props.department && (formData.id = this.props.department._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Add Department</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cname">Course Name:-</label>                   
                    <select name='course' id='cname' value={this.state.course} onChange={this.handleChange}>
                        <option value=''>----select----</option>
                        {
                            this.props.course.map((course)=>{
                                return <option value={course._id} key={course._id}>{course.course_name}</option>
                            })
                        }
                    </select><br/><br/>
                    <label htmlFor="name">Department Name:-</label>
                    <input 
                        type="text"
                        id="name"
                        name="department_name"
                        value={this.state.department_name}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <label htmlFor="iname">Incharge Name:-</label>
                    <input 
                        type="text"
                        id="iname"
                        name="incharge_name"
                        value={this.state.incharge_name}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <label htmlFor="description">description:-</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        course:state.course
    }
}
export default connect(mapStateToProps)(DepartmentForm)