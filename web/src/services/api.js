import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://food-explorer-wyqs.onrender.com',
  withCredentials: true,
})
