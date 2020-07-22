import axios from 'axios'

export const AddRooms =(room)=>{
    return {type:'ADD_ROOMS',payload:room}
}
export const startAddRooms =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/rooms',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const room =response.data
                    redirect()
                    dispatch(AddRooms(room))
                }
            })
    }
}

export const setRooms = (room) => {
    return { type: 'SET_ROOMS', payload: room }
}

export const startSetRooms = () => {
        return (dispatch) => {
            axios.get('/rooms', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const room = response.data
                dispatch(setRooms(room))
            })
        }
}

export const removeRoom = (room) => {
    return { type: 'REMOVE_ROOM', payload: room }
}

export const startRemoveRoom = (id) => {
    return (dispatch) => {
        axios.delete(`/rooms/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const room = response.data
            dispatch(removeRoom(room))
        })
    }
}

export const editRoom = (room) => {
    return { type: 'EDIT_ROOM', payload: room }
}

export const startEditRoom = (room, redirect) => {
    return (dispatch) => {
        axios.put(`/rooms/${room.id}`, room, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const room = response.data 
                dispatch(editRoom(room))
                redirect()
            }
        })
    }
}