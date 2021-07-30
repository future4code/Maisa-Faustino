import React from 'react'
import axios from 'axios'
import styled from "styled-components"



export default class App extends React.Component {
  state = {
    missions: []
  }

  componentDidMount() {
    this.getMissions()
  }
  getMissions = () => {
    axios.get('https://api.spacexdata.com/v3/missions')
      .then((res) => {
        this.setState({ missions: res.data })
      })
      .catch((err) => {
      })
  }
  render() {
    const missionList = this.state.missions.map((missions) => {
      console.log (missions)
      return (
        <div key={missions.mission_id}>
          <p>Nome: {missions.mission_name}</p>
          <p>Fabricantes: {missions.manufacturers.map((manufacturers) => <p>{manufacturers}
          </p>)}
          </p>
          <a href={missions.wikipedia}>Link para Wikipedia</a>
          <hr />
        </div>
      )
    })
    return (
      <div className='App'>
        <h1>Missões da SpaceX</h1>
        {missionList}
      </div>
    )

  }

}

