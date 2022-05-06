import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-5771b-default-rtdb.firebaseio.com/'
})