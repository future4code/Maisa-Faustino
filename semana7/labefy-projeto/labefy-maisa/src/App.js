import React from 'react'

import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const headers= {
  headers: {
    Authorization: 'maisa-faustino-lovelace'
  }
}

export default class App extends React.Component {

  state = {
    playlist: [],
    inputValue: '',
    mostraPlaylist: false

  }
  pegarValuePlaylist = (event) => {
    this.setState({inputValue: event.target.value})
  }
  
  criarPlaylist = async () => {
    const body = {
      name: this.state.inputValue
    }
    
    await axios.post(url, body, headers)
 
  }
   pegarTodasPlaylists = async () => {
     const res = await axios.get( url, headers)
     this.setState({playlist: res.data.result.list, mostraPlaylist: true})


   }
   deletarPlaylist = () => {
     
   }
  
  
  render (){
    const mostrarPlaylist = this.state.playlist.map(({name , id}) => {
      return <li key={id}>{name}</li>

    })

    return (
      <div>
        <h1>Labefy</h1>
        <h4>Sua música do seu jeito</h4>
        <input
        placeholder= {'Nome da sua playlist'}
        value={this.state.inputValue}
        onChange={this.pegarValuePlaylist}

        >
        </input>
        <button onClick={this.criarPlaylist}>Criar playlist</button>
        <button onClick={this.pegarTodasPlaylists}>Ver Playlists</button>
        <ul>
          {this.state.mostraPlaylist && mostrarPlaylist}
        </ul>
      </div>
    )

  }
}