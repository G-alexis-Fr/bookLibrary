import React from 'react'
import axios from 'axios'

const apiUrl = 'https://express-app-for-react-course.herokuapp.com/books'

const API = async () => {
  return await axios.get(apiUrl)
}

export default API
