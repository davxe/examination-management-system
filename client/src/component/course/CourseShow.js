import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { findCourse } from '../../selectors/courseSelector'
import { Container } from 'react-bootstrap'
import axios from '../../config/axios'

class CourseShow extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    componentDidMount(){
        axios.get(`/courses/${this.props.match.params.id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then(response=>{
                if(response.data._id){
                    this.setState({name:response.data.course_name})
                }
            })
    }
    render(){
        return (
            <Container>
                <h1 className='pt-5 pb-2'>Course Show</h1>
                <h2 className='mt-5'><b>Course Name:-</b>{this.state.name} </h2>
                <Link className='text-primary' to='/courses'>back</Link>
            </Container>
        )
    }
    
}
export default connect()(CourseShow)