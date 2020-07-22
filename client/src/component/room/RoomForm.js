import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'

class RoomForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            room: props.room ? props.room.room : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            room: this.state.room,
        }
        this.props.room && (formData.id = this.props.room._id)
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
                    <h1 className='pt-5 pb-2'>Add Room</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="name">Room No.:-</Form.Label>                   
                        <Form.Control 
                            type='text' 
                            name='room' 
                            id='name' 
                            value={this.state.room} 
                            onChange={this.handleChange}>
                        </Form.Control><br/><br/>
                        
                        <input type="submit" value="Submit" className='btn btn-secondary'/>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect()(RoomForm)