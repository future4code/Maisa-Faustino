import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToRecipesList} from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/login`, body) 
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToRecipesList(history)
    })
    .catch((err) => alert('Erro no login'))

}

export const signUp = (body, clear, history) => {
  axios.post(`${BASE_URL}/user/singup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToRecipesList(history)
    })
    .catch((err) => alert('Erro ao cadastrar!'))

}