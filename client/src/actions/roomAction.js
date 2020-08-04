import axios from 'axios'
import swal from 'sweetalert'
export const AddRooms =(room)=>{
    return {type:'ADD_ROOMS',payload:room}
}
export const startAddRooms =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/rooms',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    swal({
                        icon:'info',
                        title:'Validation faled',
                        text: `${response.data.message}`,
                      });
                }
                else{
                    swal({
                        title: "Good job!",
                        text: "added successfully",
                        icon: "success",
                      });
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
                swal({
                    icon:'info',
                    title:'Validation faled',
                    text: `${response.data.message}`,
                  });
            }
            else{
                swal({
                    title: "Good job!",
                    text: "updated successfully",
                    icon: "success",
                  });
                const room = response.data 
                dispatch(editRoom(room))
                redirect()
            }
        })
    }
}