import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HomePageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgray;
height: 350px;
width: 350px;
`

export default function HomePage () {
  return(
    <HomePageContainer>
        <p>Bem-vindo</p>
        <Link to={'/trips/list'}>
            <button>Ver viagens</button>
        </Link>
        <Link to={'/admin/trips/list'}>
            <button>Fazer Login</button>
        </Link>
    </HomePageContainer>
  )
}