import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'

class ExamForm extends React.Component{

    constructor(props){
        super(props)
        const year=(new Date()).getFullYear()
        this.state = {
            exam_name: props.exam ? props.exam.exam_name : '',
            exam_year: props.exam ? props.exam.exam_year:'',
            exam_type:props.exam ? props.exam.exam_type:'',
            years:Array.from(new Array(20),(val,index)=>index+year)
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            exam_name: this.state.exam_name,
            exam_year: this.state.exam_year,
            exam_type:this.state.exam_type,
        }
        this.props.exam && (formData.id = this.props.exam._id)
        this.props.handleEditSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="fluid-container" style={{height:"700px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Exam</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="ename">Exam Name:-</Form.Label>                   
                        <Form.Control 
                            type='text' 
                            name='exam_name' 
                            id='ename' 
                            value={this.state.exam_name} 
                            onChange={this.handleChange}>
                        </Form.Control><br/><br/>
                        <Form.Label htmlFor="eyear">Exam Year:-</Form.Label>
                        <Form.Control as='select' id="eyear" name="exam_year" value={this.state.exam_year} onChange={this.handleChange}>
                            <option value=''>---select---</option>
                            {
                                this.state.years.map((year,i)=>{
                                    return <option key={i} value={year}>{year}</option>
                                })
                            }
                        </Form.Control> <br/><br/>
                        <Form.Label htmlFor="etype">Exam Type:-</Form.Label>
                        <Form.Control
                            type="text"
                            id="etype"
                            name="exam_type"
                            value={this.state.exam_type}
                            onChange={this.handleChange}
                        /> <br/><br/>
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect()(ExamForm)