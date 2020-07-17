import React from 'react'

class CourseForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            course_name: props.course ? props.course.course_name : '',
            description: props.course ? props.course.description : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            course_name: this.state.course_name,
            description: this.state.description,
        }
        this.props.course && (formData.id = this.props.course._id)
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
                <h1>Add Course</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">CourseName:-</label>
                    <input 
                        type="text"
                        id="name"
                        name="course_name"
                        value={this.state.course_name}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label htmlFor="description">description:-</label>
                    <input 
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
export default CourseForm