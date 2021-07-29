import React from "react"
import axios from 'axios'
import styled from "styled-components"


const cardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component{
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: 'maisa-faustino-lovelace'
            }
        })
        .then((res) => {
            this.setState({})
        })
        .catch((err) =>{
            alert()
        }) 
    }
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            Authorization: 'maisa-faustino-lovelace'
        })
        .then((res) => {
            alert('Usuario(a) deletado(a) com sucesso.')
            this.pegarUsuarios()
        })
        .catch((err) =>{
            alert('Ocorreu um erro. Tente novamente.')
        }) 
    }
    render(){
       const listaUsuario = this.state.usuarios.map((user) => {
            return <cardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </cardUsuario>
        })
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuario}
            </div>
        )
    }
}