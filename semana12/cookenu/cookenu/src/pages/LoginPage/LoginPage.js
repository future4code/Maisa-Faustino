import React from "react"
import {
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled"
import logo from "../../assets/logo.png"
import Button from "@material-ui/core/Button"
import LoginForm from "./LoginForm"
import { goToSignUp } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'


const LoginPage = () => {
  const history = useHistory()

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"subimit"} 
          fullWidth 
          variant={"text"} 
          color={"primary"}
          >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage;
