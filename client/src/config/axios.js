import axios from 'axios'

export const urlApi = axios.create({
    // baseURL: "http://localhost:3001/api"
    baseURL: "https://api-ejercicio-web.onrender.com/api"
    // cuando esté listo el deploy se cambiará la ruta
})