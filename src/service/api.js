import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backendcastrocursos.onrender.com'
})

export default api
