import React from "react"
import {
  InputsContainer, LoginFormContainer
} from "./styled"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {login} from '../../services/user'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history)
  }


  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Fazer Login
          </Button>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  )
}

export default LoginForm
