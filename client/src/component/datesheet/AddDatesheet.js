import React from 'react'
import {connect} from 'react-redux'

import DatesheetForm from './DatesheetForm'
import { startAddDatesheets } from '../../actions/datesheetAction'

function AddDatesheet(props){  

    const  handleEditSubmit = (datesheet) => {    
        const redirect = () => props.history.push('/datesheets')
        props.dispatch(startAddDatesheets(datesheet,redirect))
    }
        return (
            <div>
                <DatesheetForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddDatesheet)