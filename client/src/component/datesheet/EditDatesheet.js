import React from 'react'
import { connect } from 'react-redux'
import DatesheetForm from './DatesheetForm'

import {startEditDatesheet} from '../../actions/datesheetAction'
import { findDatesheet } from '../../selectors/datesheetSelector'

function EditDatesheet(props){

    const handleEditSubmit = (datesheet) => {
        const redirect = () => {
            return props.history.push(`/datesheets`)
        }
        props.dispatch(startEditDatesheet(datesheet, redirect))
    }
    return (
        <div>
            
            {props.datesheet && (
                <div>
                    {props.datesheet.name && <DatesheetForm datesheet = {props.datesheet} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        datesheet: findDatesheet(state.datesheet,id)
    }
}
export default connect(mapStateToProps)(EditDatesheet)