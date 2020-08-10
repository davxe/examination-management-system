import Axios from 'axios'
const URL = window.location.origin.includes('localhost') ? "http://localhost:3001/api" : "/api"
const axios = Axios.create({
  baseURL: URL
//   baseURL:'/api'
})

export default axios